import boto3
import json
import os
import traceback
from botocore.exceptions import ClientError

cognito_client = boto3.client('cognito-idp')

def lambda_handler(event, context):
    try:
        # Parse request body
        request_body = json.loads(event["body"])
        username = request_body['username']
        password = request_body['password']
        email = request_body['email']
        
        client_id = os.environ['COGNITO_USER_POOL_CLIENT_ID']
                
        # Call the signup API
        response = cognito_client.sign_up(
            ClientId=client_id,
            Username=username,
            Password=password,
            UserAttributes=[
                {
                    'Name': 'email',
                    'Value': email
                }
            ]
        )
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'message': 'User signed up successfully'})
        }
    except ClientError as e:
        print(e)
        traceback.print_exc()
        error_code = e.response['Error']['Code']
        if error_code == 'UsernameExistsException':
            error_message = 'Username already exists.'
        elif error_code == 'UserLambdaValidationException':
            error_message = 'Email already in use.'
        else:
            error_message = 'Signup failed. Please use another email.'
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'error': error_message})
        }
    except ValueError as e:
        print(e)
        traceback.print_exc()
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'error': str(e)})
        }
    except Exception as e:
        print(e)
        traceback.print_exc()
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'error': 'Enter correct username, email & password'})
        }

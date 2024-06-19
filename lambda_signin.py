import os
import boto3
import json

cognito_client = boto3.client('cognito-idp')

def lambda_handler(event, context):
    try:
        username = json.loads(event["body"])['username']
        password = json.loads(event["body"])['password']
        
        # Retrieve the ClientId from environment variables
        client_id = os.environ['COGNITO_USER_POOL_CLIENT_ID']
        
        # Call the sign-in API
        response = cognito_client.initiate_auth(
            ClientId=client_id,  # Use the retrieved ClientId
            AuthFlow='USER_PASSWORD_AUTH',
            AuthParameters={
                'USERNAME': username,
                'PASSWORD': password
            }
        )
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'message': 'User signed in successfully', 'AccessToken': response['AuthenticationResult']['AccessToken']})
        }
    except Exception as e:
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'error': 'Wrong Password & Username'})
        }

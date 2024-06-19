import boto3
import json
import os
import traceback
cognito_client = boto3.client('cognito-idp')

def lambda_handler(event, context):
    try:
        request_body = json.loads(event["body"])
        username = request_body['username']
        verification_code = request_body['verification_code']
        
        # Retrieve the ClientId from environment variables
        client_id = os.environ['COGNITO_USER_POOL_CLIENT_ID']

        # Call the verification API
        response = cognito_client.confirm_sign_up(
            ClientId=client_id,
            Username=username,
            ConfirmationCode=verification_code
        )
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': json.dumps({'message': 'User verified successfully'})
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
            'body': json.dumps({'error': str(e)})
        }

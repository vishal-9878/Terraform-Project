data "archive_file" "lambda_signin" {
  type        = "zip"
  source_file = "lambda_signin.py"
  output_path = "lambda_signin.zip"
}

resource "aws_lambda_function" "lambda_signin" {
  depends_on = [ aws_cognito_user_pool_client.test_client ]
  filename      = data.archive_file.lambda_signin.output_path
  function_name = "lambda_function_signin"
  role          = "arn:aws:iam::912920311350:role/my-lambda-full"
  handler       = "lambda_signin.lambda_handler"
  runtime       = "python3.12"

  environment {
    variables = {
      COGNITO_USER_POOL_CLIENT_ID = aws_cognito_user_pool_client.test_client.id
    }
  }
}

data "archive_file" "lambda_signup" {
  type        = "zip"
  source_file = "lambda_signup.py"
  output_path = "lambda_signup.zip"
}

resource "aws_lambda_function" "lambda_signup" {
  depends_on = [ aws_lambda_function.lambda_signin ]
  filename      = data.archive_file.lambda_signup.output_path
  function_name = "lambda_function_signup"
  role          = "arn:aws:iam::912920311350:role/my-lambda-full"
  handler       = "lambda_signup.lambda_handler"
  runtime       = "python3.12"

  environment {
    variables = {
      COGNITO_USER_POOL_CLIENT_ID = aws_cognito_user_pool_client.test_client.id
    }
  }
}

data "archive_file" "lambda_verification" {
  type        = "zip"
  source_file = "lambda_verification.py"
  output_path = "lambda_verification.zip"
}

resource "aws_lambda_function" "lambda_verification" {
  depends_on = [ aws_lambda_function.lambda_signup ]
  filename      = data.archive_file.lambda_verification.output_path
  function_name = "lambda_function_verification"
  role          = "arn:aws:iam::912920311350:role/my-lambda-full"
  handler       = "lambda_verification.lambda_handler"
  runtime       = "python3.12"

  environment {
    variables = {
      COGNITO_USER_POOL_CLIENT_ID = aws_cognito_user_pool_client.test_client.id
    }
  }
}
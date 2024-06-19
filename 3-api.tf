resource "aws_api_gateway_rest_api" "testing" {
  name        = "lpu-project"
  description = "API for testing"
  endpoint_configuration {
    types = ["EDGE"]
  }
}

resource "aws_api_gateway_resource" "signin" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  parent_id   = aws_api_gateway_rest_api.testing.root_resource_id
  path_part   = "signin"
}

resource "aws_api_gateway_resource" "signup" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  parent_id   = aws_api_gateway_rest_api.testing.root_resource_id
  path_part   = "signup"
}

resource "aws_api_gateway_resource" "verify" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  parent_id   = aws_api_gateway_rest_api.testing.root_resource_id
  path_part   = "verify"
}

resource "aws_api_gateway_method" "signin_post" {
  rest_api_id   = aws_api_gateway_rest_api.testing.id
  resource_id   = aws_api_gateway_resource.signin.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_method" "signup_post" {
  rest_api_id   = aws_api_gateway_rest_api.testing.id
  resource_id   = aws_api_gateway_resource.signup.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_method" "verify_post" {
  rest_api_id   = aws_api_gateway_rest_api.testing.id
  resource_id   = aws_api_gateway_resource.verify.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_method" "signin_options" {
  rest_api_id   = aws_api_gateway_rest_api.testing.id
  resource_id   = aws_api_gateway_resource.signin.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

resource "aws_api_gateway_method" "signup_options" {
  rest_api_id   = aws_api_gateway_rest_api.testing.id
  resource_id   = aws_api_gateway_resource.signup.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

resource "aws_api_gateway_method" "verify_options" {
  rest_api_id   = aws_api_gateway_rest_api.testing.id
  resource_id   = aws_api_gateway_resource.verify.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "signin_post" {
  rest_api_id             = aws_api_gateway_rest_api.testing.id
  resource_id             = aws_api_gateway_resource.signin.id
  http_method             = aws_api_gateway_method.signin_post.http_method
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  uri                     = aws_lambda_function.lambda_signin.invoke_arn
}

resource "aws_api_gateway_integration" "signup_post" {
  rest_api_id             = aws_api_gateway_rest_api.testing.id
  resource_id             = aws_api_gateway_resource.signup.id
  http_method             = aws_api_gateway_method.signup_post.http_method
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  uri                     = aws_lambda_function.lambda_signup.invoke_arn
}

resource "aws_api_gateway_integration" "verify_post" {
  rest_api_id             = aws_api_gateway_rest_api.testing.id
  resource_id             = aws_api_gateway_resource.verify.id
  http_method             = aws_api_gateway_method.verify_post.http_method
  type                    = "AWS_PROXY"
  integration_http_method = "POST"
  uri                     = aws_lambda_function.lambda_verification.invoke_arn
}

resource "aws_api_gateway_integration" "signin_options" {
  rest_api_id             = aws_api_gateway_rest_api.testing.id
  resource_id             = aws_api_gateway_resource.signin.id
  http_method             = aws_api_gateway_method.signin_options.http_method
  type                    = "MOCK"
  request_templates       = {
    "application/json" = "{\"statusCode\": 200}"
  }
}

resource "aws_api_gateway_integration" "signup_options" {
  rest_api_id             = aws_api_gateway_rest_api.testing.id
  resource_id             = aws_api_gateway_resource.signup.id
  http_method             = aws_api_gateway_method.signup_options.http_method
  type                    = "MOCK"
  request_templates       = {
    "application/json" = "{\"statusCode\": 200}"
  }
}

resource "aws_api_gateway_integration" "verify_options" {
  rest_api_id             = aws_api_gateway_rest_api.testing.id
  resource_id             = aws_api_gateway_resource.verify.id
  http_method             = aws_api_gateway_method.verify_options.http_method
  type                    = "MOCK"
  request_templates       = {
    "application/json" = "{\"statusCode\": 200}"
  }
}

resource "aws_api_gateway_method_response" "signin_post_response" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.signin.id
  http_method = aws_api_gateway_method.signin_post.http_method
  status_code = "200"
}

resource "aws_api_gateway_method_response" "signin_options_response" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.signin.id
  http_method = aws_api_gateway_method.signin_options.http_method
  status_code = "200"
  
  response_models = {
    "application/json" = "Empty"
  }
  
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}

resource "aws_api_gateway_method_response" "signup_post_response" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.signup.id
  http_method = aws_api_gateway_method.signup_post.http_method
  status_code = "200"
}

resource "aws_api_gateway_method_response" "signup_options_response" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.signup.id
  http_method = aws_api_gateway_method.signup_options.http_method
  status_code = "200"
  
  response_models = {
    "application/json" = "Empty"
  }
  
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}

resource "aws_api_gateway_method_response" "verify_post_response" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.verify.id
  http_method = aws_api_gateway_method.verify_post.http_method
  status_code = "200"
}

resource "aws_api_gateway_method_response" "verify_options_response" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.verify.id
  http_method = aws_api_gateway_method.verify_options.http_method
  status_code = "200"
  
  response_models = {
    "application/json" = "Empty"
  }
  
  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true
    "method.response.header.Access-Control-Allow-Methods" = true
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}


resource "aws_api_gateway_integration_response" "signin_post_api" {
  depends_on  = [aws_api_gateway_integration.signin_post]  # Ensure proper dependency
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.signin.id
  http_method = aws_api_gateway_method.signin_post.http_method
  status_code = "200"
}

resource "aws_api_gateway_integration_response" "signup_post_api" {
  depends_on  = [aws_api_gateway_integration.signup_post]  # Ensure proper dependency
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.signup.id
  http_method = aws_api_gateway_method.signup_post.http_method
  status_code = "200"
}

resource "aws_api_gateway_integration_response" "verify_post_api" {
  depends_on  = [aws_api_gateway_integration.verify_post]  # Ensure proper dependency
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.verify.id
  http_method = aws_api_gateway_method.verify_post.http_method
  status_code = "200"
}

resource "aws_api_gateway_integration_response" "signin_options" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.signin.id
  http_method = aws_api_gateway_method.signin_options.http_method
  status_code = "200"

  response_templates = {
    "application/json" = ""
  }

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
    "method.response.header.Access-Control-Allow-Methods" = "'OPTIONS,POST'"
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }

  depends_on = [aws_api_gateway_integration.signin_post]  # Ensure proper dependency
}

resource "aws_api_gateway_integration_response" "signup_options" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.signup.id
  http_method = aws_api_gateway_method.signup_options.http_method
  status_code = "200"

  response_templates = {
    "application/json" = ""
  }

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
    "method.response.header.Access-Control-Allow-Methods" = "'OPTIONS,POST'"
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }

  depends_on = [aws_api_gateway_integration.signup_post]  # Ensure proper dependency
}

resource "aws_api_gateway_integration_response" "verify_options" {
  rest_api_id = aws_api_gateway_rest_api.testing.id
  resource_id = aws_api_gateway_resource.verify.id
  http_method = aws_api_gateway_method.verify_options.http_method
  status_code = "200"

  response_templates = {
    "application/json" = ""
  }

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
    "method.response.header.Access-Control-Allow-Methods" = "'OPTIONS,POST'"
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }

  depends_on = [aws_api_gateway_integration.verify_post]  # Ensure proper dependency
}

resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_signin.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.testing.execution_arn}/*/*"
}

resource "aws_lambda_permission" "allow_api_gateway_signup" {
  statement_id  = "AllowAPIGatewayInvokeSignup"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_signup.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.testing.execution_arn}/*/*"
}

resource "aws_lambda_permission" "allow_api_gateway_verification" {
  statement_id  = "AllowAPIGatewayInvokeVerification"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda_verification.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.testing.execution_arn}/*/*"
}

resource "aws_api_gateway_deployment" "api_deployment" {
  depends_on = [
    aws_api_gateway_integration.signin_post,
    aws_api_gateway_integration.signup_post,
    aws_api_gateway_integration.verify_post,
    aws_api_gateway_integration.signin_options,
    aws_api_gateway_integration.signup_options,
    aws_api_gateway_integration.verify_options
  ]
  rest_api_id = aws_api_gateway_rest_api.testing.id
  stage_name  = "lpu"
}

resource "local_file" "api_urls" {
  depends_on = [aws_api_gateway_deployment.api_deployment]
  content  = <<-EOT
    REACT_APP_API_URL_SIGNIN=${aws_api_gateway_deployment.api_deployment.invoke_url}/signin
    REACT_APP_API_URL_SIGNUP=${aws_api_gateway_deployment.api_deployment.invoke_url}/signup
    REACT_APP_API_URL_VERIFY=${aws_api_gateway_deployment.api_deployment.invoke_url}/verify
    EOT
  filename = "/home/vishal/Downloads/Terraform/my-react-app/.env"
}

resource "null_resource" "build_react_project" {
  depends_on = [local_file.api_urls, aws_api_gateway_deployment.api_deployment]
  provisioner "local-exec" {
    working_dir = "/home/vishal/Downloads/Terraform/my-react-app/"
    command     = "npm run build"
  }
  triggers = {
    build_time = timestamp()
  }
}

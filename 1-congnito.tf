provider "aws" {
  region = "us-west-2"
}

resource "aws_cognito_user_pool" "test" {
  name = "lpu-pool"

  auto_verified_attributes = ["email"]

  verification_message_template {
    default_email_option = "CONFIRM_WITH_CODE"
  }

  admin_create_user_config {
    allow_admin_create_user_only = false

    invite_message_template {
      email_message = "Your username is {username} and temporary password is {####}. Sign in and set a new password."
      email_subject = "Welcome to our service!"
      sms_message   = "Your username is {username} and temporary password is {####}."
    }
  }

  user_attribute_update_settings {
    attributes_require_verification_before_update = ["email"]
  }

  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  schema {
    attribute_data_type      = "String"
    name                     = "email"
    required                 = true
    mutable                  = true
    developer_only_attribute = false
  }

  schema {
    attribute_data_type      = "String"
    name                     = "preferred_username"
    required                 = false
    mutable                  = true
    developer_only_attribute = false
  }
}

resource "aws_cognito_user_pool_client" "test_client" {
  name         = "lpu"
  user_pool_id = aws_cognito_user_pool.test.id

  generate_secret = false

  explicit_auth_flows = [
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_USER_PASSWORD_AUTH",
    "ALLOW_USER_SRP_AUTH"
  ]

  allowed_oauth_flows = ["code"]
  allowed_oauth_scopes = ["email", "openid"]
  callback_urls = ["https://github.com/vishal-9878"]
  supported_identity_providers = ["COGNITO"]

  prevent_user_existence_errors = "ENABLED"
  enable_token_revocation = true
  auth_session_validity = 3
  allowed_oauth_flows_user_pool_client = true
}

resource "aws_cognito_user_pool_domain" "test_domain" {
  domain      = "lpu-domain-peoj"
  user_pool_id = aws_cognito_user_pool.test.id
}

# resource "aws_cloudfront_distribution" "s3_distribution" {
#   depends_on = [ aws_s3_object.build_files ]
#   origin {
#     domain_name = aws_s3_bucket.website_bucket.bucket_regional_domain_name
#     origin_id   = aws_s3_bucket.website_bucket.id

#     custom_origin_config {
#       http_port              = 80
#       https_port             = 443
#       origin_protocol_policy = "http-only"
#       origin_ssl_protocols   = ["TLSv1.2"]
#     }
#   }

#   enabled             = true
#   is_ipv6_enabled     = true
#   comment             = "CloudFront distribution for S3 website bucket"
#   default_root_object = "index.html"

#   default_cache_behavior {
#     allowed_methods  = ["GET", "HEAD"]
#     cached_methods   = ["GET", "HEAD"]
#     target_origin_id = aws_s3_bucket.website_bucket.id

#     viewer_protocol_policy = "allow-all"
#     compress               = true
#     cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6" # Cache optimized policy ID
#   }

#   price_class = "PriceClass_All"

#   restrictions {
#     geo_restriction {
#       restriction_type = "none"
#     }
#   }

#   viewer_certificate {
#     cloudfront_default_certificate = true
#   }
# }

# output "cloudfront_domain_name" {
#   value = aws_cloudfront_distribution.s3_distribution.domain_name
# }

resource "aws_s3_bucket" "website_bucket" {
  depends_on = [ null_resource.build_react_project ]
  bucket     = "lpu-website-bucket-for-lpu-proj" # Change this to your desired bucket name
}

#___________________________________________________________________________________________________________________________________
resource "aws_s3_bucket_website_configuration" "Configuration" {
  bucket     = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_policy" "website_bucket_policy" {
  bucket     = aws_s3_bucket.website_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = [
          "s3:GetObject",
          "s3:PutObject"
        ],
        Resource = "${aws_s3_bucket.website_bucket.arn}/*"
      }
    ]
  })
}

#------------------------------------------------------------------------------------------------------------------------------------
resource "aws_s3_bucket_public_access_block" "website_bucket_public_access_block" {
  bucket     = aws_s3_bucket.website_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

#------------------------------------------------------------------------------------------------------------------------------------
locals {
  content_types = {
    "html" = "text/html",
    "css"  = "text/css",
    "js"   = "application/javascript",
    "png"  = "image/png",
    "jpg"  = "image/jpeg",
    "jpeg" = "image/jpeg",
    "gif"  = "image/gif",
    "svg"  = "image/svg+xml",
    "json" = "application/json"
  }
}

#------------------------------------------------------------------------------------------------------------------------------------
resource "aws_s3_object" "build_files" {
  depends_on = [null_resource.build_react_project]
  for_each   = fileset("/home/vishal/Downloads/Terraform/my-react-app/build", "**/*")

  bucket       = aws_s3_bucket.website_bucket.bucket
  key          = each.value
  source       = "/home/vishal/Downloads/Terraform/my-react-app/build/${each.value}"
  etag         = filemd5("/home/vishal/Downloads/Terraform/my-react-app/build/${each.value}")
  content_type = lookup(local.content_types, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")
}

#___________________________________________________________________________________________________________________________________

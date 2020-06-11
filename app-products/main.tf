provider "aws" {
  region = "us-east-1"
}

# ==============================================
# Bucket Products
# ==============================================

variable "bucket_name_app" {
  default = "cfryerdev-dfe-app-products"
}

resource "aws_s3_bucket" "bucket_app" {
  bucket = "${var.bucket_name_app}"
  acl    = "public-read"

  policy = <<EOF
  {
    "Id": "bucket_policy_site",
    "Version": "2012-10-17",
    "Statement": [
        {
        "Sid": "bucket_policy_site_main",
        "Action": [
            "s3:GetObject"
        ],
        "Effect": "Allow",
        "Resource": "arn:aws:s3:::${var.bucket_name_app}/*",
        "Principal": "*"
        }
    ]
  }
  EOF

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

# ==============================================
# Output
# ==============================================

output "website_domain" {
  value = "${aws_s3_bucket.bucket_app.website_domain}"
}

output "website_endpoint" {
  value = "${aws_s3_bucket.bucket_app.website_endpoint}"
}
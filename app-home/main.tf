provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "cfryerdev-dfe-app" {
  bucket = "cfryerdev-dfe-app-home"
  acl    = "public-read"
  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::cfryerdev-dfe-app-home/*"]
    }
  ]
}
POLICY
  
  website {
    index_document = "index.html"
  }
}
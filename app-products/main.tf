provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "cfryerdev-dfe-app" {
  bucket = "products.cfryerdev-mfe.info"
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
      "Resource": ["arn:aws:s3:::products.cfryerdev-mfe.info/*"]
    }
  ]
}
POLICY
  
  website {
    index_document = "index.html"
  }
}

data "aws_route53_zone" "dfe_zone" {
  name = "cfryerdev-mfe.info."
}

resource "aws_route53_record" "dfe-products" {
  zone_id = data.aws_route53_zone.dfe_zone.id
  name    = "products"
  type    = "CNAME"
  ttl     = "5"
  records = ["cfryerdev-dfe-app-products.s3-website-us-east-1.amazonaws.com"]
}
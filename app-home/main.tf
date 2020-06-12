provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "cfryerdev-dfe-app" {
  bucket = "www.cfryerdev-mfe.info"
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
      "Resource": ["arn:aws:s3:::www.cfryerdev-mfe.info/*"]
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

resource "aws_route53_record" "dfe-www" {
  zone_id = data.aws_route53_zone.dfe_zone.id
  name    = "www"
  type    = "CNAME"
  ttl     = "5"
  records = ["www.cfryerdev-mfe.info.s3-website-us-east-1.amazonaws.com"]
}
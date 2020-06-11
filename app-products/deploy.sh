npm run build
./terraform.exe init
./terraform.exe apply
aws s3 sync build s3://cfryerdev-dfe-app-products
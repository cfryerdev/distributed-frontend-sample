npm i
npm run build
./terraform.exe init
./terraform.exe apply
aws s3 sync dist s3://cfryerdev-dfe-app-login
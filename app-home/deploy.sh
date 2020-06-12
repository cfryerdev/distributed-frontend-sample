npm i
npm run build
./terraform.exe init
./terraform.exe apply -input=false -auto-approve
aws s3 sync build s3://www.cfryerdev-mfe.info
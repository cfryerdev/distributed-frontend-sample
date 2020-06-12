npm i
npm run build
./terraform.exe init
./terraform.exe apply -input=false -auto-approve
aws s3 sync dist s3://about.cfryerdev-mfe.info
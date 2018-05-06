#!/bin/bash

CMDNAME=`basename $0`
ENV="local"

while getopts e:p: OPT
do
  case $OPT in
    "e" ) ENV="$OPTARG" ;;
      * ) echo "Usage: $CMDNAME [-e ENV] [-p PROFILE]" 1>&2
          exit 1 ;;
  esac
done

if [ $ENV = "local" ]; then
  ENDPOINT_URL_OPT="--endpoint-url=http://localhost:4572" 
fi


# S3
## test-bucketというバケットを作る
aws $ENDPOINT_URL_OPT s3api create-bucket --bucket test-bucket 

## test.txtをアップロード
aws $ENDPOINT_URL_OPT s3 cp ./s3/test.txt s3://test-bucket/

## 確認
aws $ENDPOINT_URL_OPT s3 ls s3://test-bucket


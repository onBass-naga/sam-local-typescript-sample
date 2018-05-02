import { S3 } from 'aws-sdk'

interface S3Service {
  getObject(bucket: string, key: string)
}

class S3ServiceImpl implements S3Service {

  private s3: S3

  public constructor(s3Config) {
    this.s3 = new S3(s3Config)
  }

  getObject(bucket: string, key: string) {
    const getParams = {
      Bucket: bucket,
      Key: key
    }

    return new Promise((resolve, reject) =>
      this.s3.getObject(getParams, (err, data) => {

        if (err) {
          console.log('read S3 err: ' + JSON.stringify(err))
          reject(err)
          return
        }

        console.log('read S3: ' + data.Body)
        resolve(data)
      })
    )
  }
}

export { S3Service, S3ServiceImpl }
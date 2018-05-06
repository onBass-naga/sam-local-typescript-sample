import { S3, AWSError } from 'aws-sdk'
import { Logger } from 'shared/logger/Logger';

interface S3Service {
  getObject(bucket: string, key: string, callback)

  listObjectNames(bucket: string, callback)
}

class S3ServiceImpl implements S3Service {

  private logger = new Logger()

  private s3: S3

  public constructor(s3Config) {
    this.s3 = new S3(s3Config)
  }

  getObject(bucket: string, key: string, callback) {
    const getParams = {
      Bucket: bucket,
      Key: key
    }

    this.s3.getObject(getParams, (err, data) => {
      if (err) {
        this.logger.error('Failed to read S3: ' + JSON.stringify(err))
        callback(err, null)
        return
      }

      this.logger.debug('read S3: ' + data.Body)
      callback(null, data)
    })
  }

  listObjectNames(bucket: string, callback) {
    this.s3.listObjectsV2({ Bucket: bucket }, (err: AWSError, data: S3.Types.ListObjectsV2Output) => {

      if (err) {
        // this.logger.error('Failed to read S3: ' + JSON.stringify(err))
        callback(err.message, null)
        return
      }

      // this.logger.debug(JSON.stringify(data))
      const names = data.Contents.map(obj => obj.Key)
      callback(null, names)
    })
  }
}

export { S3Service, S3ServiceImpl }
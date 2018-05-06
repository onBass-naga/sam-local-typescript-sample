import { S3Service } from 'shared/s3/S3Service'

class S3ServiceMock implements S3Service {

  getObject(bucket: string, key: string, callback) {
    const data = { "Body":  "mock data" }
    callback(null, data)
  }

  listObjectNames(bucket: string, callback) {
    const data = ["test.txt"]
    callback(null, data)
  }
}

export { S3ServiceMock }
import { S3Service } from 'shared/s3/S3Service'

class S3ServiceMock implements S3Service {

  getObject(bucket: string, key: string) {
    return new Promise((resolve, reject) => {
      const data = { "Body":  "mock data" }
      resolve(data)
    })
  }
}

export { S3ServiceMock }
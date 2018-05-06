// import { S3ServiceMock } from 'shared/s3/S3ServiceMock'
import { S3ServiceImpl } from 'shared/s3/S3Service'

// const s3Service = new S3ServiceMock()
const S3Config = {
  region: "us-east-1",
  s3ForcePathStyle: true,
  endpoint: 'http://localstack:4572'
}
const s3Service = new S3ServiceImpl(S3Config)

export const modules = { s3Service }
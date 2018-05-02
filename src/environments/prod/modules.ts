import { S3ServiceImpl } from 'shared/s3/S3Service'

const S3Config = {
  region: "ap-northeast-1",
}
const s3Service = new S3ServiceImpl(S3Config)

export const modules = { s3Service }
import { S3ServiceMock } from 'shared/s3/S3ServiceMock'

const s3Service = new S3ServiceMock()

export const modules = { s3Service }
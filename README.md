# sam-local-typescript-sample
sam-local + localstack + TypeScript + Webpack + Mocha + power-assert

## build

```
$ npm install
$ npm run build
```

```
$ npm run build-prod
```

## localstack

```
$ cd localstack
$ TMPDIR=/private$TMPDIR docker-compose -p localstack up -d
```

```
$ ./setup.sh
```

## run local

```
sam local invoke --event sam/payload/s3_event.json --t sam/template.yaml \
  --docker-network localstack_default S3Read
```

## deploy


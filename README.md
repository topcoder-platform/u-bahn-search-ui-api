# UBahn Search UI API

## Install software

- node 12.x
- npm 6.x
- docker
- S3

## Local database deployment

1. Navigate to docker-db run `docker-compose up -d`
2. Follow *Configuration* section to update config values
3. Run `npm i` and `npm run lint`
4. Create table, `npm run create-tables`, this will create tables (if you need this)
5. Startup server `npm run start`

## Configuration

Configuration for the application is at `config/default.js` and `config/production.js`. The following parameters can be set in config files or in env variables:

- LOG_LEVEL: the log level
- PORT: the server port
- API_VERSION: the API version
- AUTH_SECRET: TC Authentication secret
- VALID_ISSUERS: valid issuers for TC authentication
- AMAZON.AWS_REGION: The Amazon region to use when connecting. For local dynamodb you can set fake value.
- AMAZON.IS_LOCAL_DB: Use local or AWS Amazon DynamoDB
- AMAZON.DYNAMODB_URL: The local url, if using local Amazon DynamoDB
- AMAZON.DYNAMODB_READ_CAPACITY_UNITS: the AWS DynamoDB read capacity units, if using local Amazon DynamoDB
- AMAZON.DYNAMODB_WRITE_CAPACITY_UNITS: the AWS DynamoDB write capacity units, if using local Amazon DynamoDB
- AMAZON.DYNAMODB_UPLOAD_TABLE: DynamoDB table name for upload
- AMAZON.DYNAMODB_TEMPLATE_TABLE: DynamoDB table name for template
- AUTH0_URL: Auth0 URL, used to get TC M2M token
- AUTH0_AUDIENCE: Auth0 audience, used to get TC M2M token
- TOKEN_CACHE_TIME: Auth0 token cache time, used to get TC M2M token
- AUTH0_CLIENT_ID: Auth0 client id, used to get TC M2M token
- AUTH0_CLIENT_SECRET: Auth0 client secret, used to get TC M2M token
- AUTH0_PROXY_SERVER_URL: Proxy Auth0 URL, used to get TC M2M token
- BUSAPI_URL: the bus api, default value is `https://api.topcoder-dev.com/v5`
- KAFKA_ERROR_TOPIC: Kafka error topic, default value is 'common.error.reporting'
- KAFKA_MESSAGE_ORIGINATOR: the Kafka message originator, default value is 'ubahn-search-ui-api'
- UPLOAD_CREATE_TOPIC: the upload create Kafka topic, default value is 'ubahn.action.create'
- TEMPLATE_FILE_MAX_SIZE: the template file restrict size, default value is '2MB'
- TEMPLATE_FILE_MIMETYPE: the template file accept type, default value is 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
- TEMPLATE_S3_BUCKET: the template s3 bucket name, default value is 'ubahn'
- UPLOAD_S3_BUCKET: the upload s3 bucket name, default value is 'ubahn'
- S3_OBJECT_URL_EXPIRY_TIME: the s3 url expiry time, default value is '1 hour'

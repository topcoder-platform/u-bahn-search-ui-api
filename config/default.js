/**
 * the default config
 */

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PORT: process.env.PORT || 3001,
  API_VERSION: process.env.API_VERSION || '/v1',
  AUTH_SECRET: process.env.AUTH_SECRET || 'mysecret',
  VALID_ISSUERS: process.env.VALID_ISSUERS ? process.env.VALID_ISSUERS.replace(/\\"/g, '')
    : '["https://topcoder-dev.auth0.com/", "https://api.topcoder.com"]',

  AUTH0_URL: process.env.AUTH0_URL || 'https://topcoder-dev.auth0.com/oauth/token',
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || 'https://m2m.topcoder-dev.com/',
  TOKEN_CACHE_TIME: process.env.TOKEN_CACHE_TIME,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  BUSAPI_URL: process.env.BUSAPI_URL || 'https://api.topcoder-dev.com/v5',
  KAFKA_ERROR_TOPIC: process.env.KAFKA_ERROR_TOPIC || 'common.error.reporting',

  AMAZON: {
    AWS_REGION: process.env.AWS_REGION || 'us-east-1',
    IS_LOCAL_DB: process.env.IS_LOCAL_DB ? process.env.IS_LOCAL_DB === 'true' : false,
    // Below three configuration is required if IS_LOCAL_DB is true
    DYNAMODB_URL: process.env.DYNAMODB_URL || 'http://localhost:8000',
    DYNAMODB_READ_CAPACITY_UNITS: process.env.DYNAMODB_READ_CAPACITY_UNITS || 10,
    DYNAMODB_WRITE_CAPACITY_UNITS: process.env.DYNAMODB_WRITE_CAPACITY_UNITS || 5,
    // table name is model name
    DYNAMODB_TEMPLATE_TABLE: process.env.DYNAMODB_TEMPLATE_TABLE || 'template',
    DYNAMODB_UPLOAD_TABLE: process.env.DYNAMODB_UPLOAD_TABLE || 'upload'
  },

  TEMPLATE_FILE_MAX_SIZE: process.env.TEMPLATE_FILE_MAX_SIZE || 2 * 1024 * 1024,
  TEMPLATE_FILE_MIMETYPE: process.env.TEMPLATE_FILE_MIMETYPE || 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  TEMPLATE_S3_BUCKET: process.env.TEMPLATE_S3_BUCKET || 'ubahn',
  UPLOAD_S3_BUCKET: process.env.UPLOAD_S3_BUCKET || 'ubahn',
  S3_OBJECT_URL_EXPIRY_TIME: process.env.S3_OBJECT_URL_EXPIRY_TIME || 60 * 60,
  KAFKA_MESSAGE_ORIGINATOR: process.env.KAFKA_MESSAGE_ORIGINATOR || 'ubahn-search-ui-api',
  UPLOAD_CREATE_TOPIC: process.env.UPLOAD_CREATE_TOPIC || 'ubahn.action.create'
}
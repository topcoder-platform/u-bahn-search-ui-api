/**
 * Create tables in Amazon DynamoDB
 */

require('../app-bootstrap')
const config = require('config')
const logger = require('../src/common/logger')
const helper = require('../src/common/helper')

logger.info('Create DynamoDB tables.')

const createTables = async () => {
  const names = [
    config.AMAZON.DYNAMODB_TEMPLATE_TABLE,
    config.AMAZON.DYNAMODB_UPLOAD_TABLE
  ]
  for (const name of names) {
    logger.info(`Create table: ${name}`)
    await helper.createTable({
      TableName: name,
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' } // Partition key
      ],
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' } // S -> String
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: Number(config.AMAZON.DYNAMODB_READ_CAPACITY_UNITS),
        WriteCapacityUnits: Number(config.AMAZON.DYNAMODB_WRITE_CAPACITY_UNITS)
      }
    })
  }
}

createTables().then(() => {
  logger.info('Done!')
  process.exit()
}).catch((e) => {
  logger.logFullError(e)
  process.exit()
})

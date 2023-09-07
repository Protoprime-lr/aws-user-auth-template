import dynamoose from 'dynamoose';
import isTest from '../isTest';

const TableInstance = (schema: any, tableName: string) => {
  if (isTest) {
    dynamoose.aws.ddb.local(process.env.LOCALHOST);
    return dynamoose.model('Item', schema, {
      tableName,
    });
  }
  console.log('MARTIN_LOG=> TableInstance', { schema, tableName });
  return dynamoose.model('Item', schema, {
    tableName,
    create: false,
    update: false,
  });
};

export default TableInstance;

import dynamoose from 'dynamoose';
import isTest from '../isTest';

const TableInstance = (schema: any, tableName: string) => {
  if (isTest) {
    dynamoose.aws.ddb.local(process.env.LOCALHOST);
  }

  return dynamoose.model('Item', schema, { tableName });
};

export default TableInstance;

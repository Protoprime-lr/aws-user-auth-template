import dayjs from 'dayjs';
import isTest from '../../../common/utils/isTest';
import { UsersDynamooseSchema } from '../../../common/schemas/dynamooseSchema';

interface iUserItemDeps {
  dateLibrary: typeof dayjs;
  isTest: typeof isTest;
  dynamooseSchema: typeof UsersDynamooseSchema;
}

export default iUserItemDeps;

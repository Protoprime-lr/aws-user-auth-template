import dayjs from 'dayjs';
import isTest from '../../common/utils/isTest';
import UserItemObject from './UserItem';
import { UsersDynamooseSchema } from '../../common/schemas/dynamooseSchema';

const UserEntity = UserItemObject({
  dateLibrary: dayjs,
  isTest,
  dynamooseSchema: UsersDynamooseSchema,
});

export default UserEntity;

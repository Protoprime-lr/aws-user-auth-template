import dayjs from 'dayjs';
import isTest from '../../common/utils/isTest';
import UserItemObject from './UserItem';

const UserEntity = UserItemObject({
  dateLibrary: dayjs,
  isTest,
});

export default UserEntity;

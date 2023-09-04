import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import userVerificationInstance from './userVerification';
import { eTableTypes } from '../../common/enums/tableTypes';
import {
  userVerificationMessageTemplate,
  userVerificationTitleTemplate,
} from './helpers/userVerificationMessageTemplate';
import getRandomVerificationCode from './helpers/getRandomVerificationCode';
import { eMessageType } from '../../common/enums/messageType';
import { UsersCacheDynamooseSchema } from '../../common/schemas/dynamooseSchema';

const UserVerification = userVerificationInstance({
  dateLibrary: dayjs,
  uuid,
  eTableTypes,
  userVerificationMessageTemplate,
  userVerificationTitleTemplate,
  getRandomVerificationCode,
  eMessageType,
  verifyDuration: process.env.VERIFY_DURATION ?? '600',
  dynamooseSchema: UsersCacheDynamooseSchema,
  userVerificationUrl: process.env.USERS_VERIFICATION_URL ?? '',
});

export default UserVerification;

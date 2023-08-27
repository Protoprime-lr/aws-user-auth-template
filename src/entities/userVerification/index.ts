import dayjs from 'dayjs';
import userVerificationInstance from './userVerification';
import { eTableTypes } from '../../common/enums/tableTypes';
import {
  userVerificationMessageTemplate,
  userVerificationTitleTemplate,
} from './helpers/userVerificationMessageTemplate';
import getRandomVerificationCode from './helpers/getRandomVerificationCode';
import { eMessageType } from '../../common/enums/messageType';

const UserVerification = userVerificationInstance({
  dateLibrary: dayjs,
  eTableTypes,
  userVerificationMessageTemplate,
  userVerificationTitleTemplate,
  getRandomVerificationCode,
  eMessageType,
  verifyDuration: process.env.VERIFY_DURATION ?? '600',
});

export default UserVerification;

import dayjs from 'dayjs';
import { eTableTypes } from '../../../common/enums/tableTypes';
import getRandomVerificationCode from '../helpers/getRandomVerificationCode';
import { eMessageType } from '../../../common/enums/messageType';

export interface iUserVerificationDeps {
  eTableTypes: typeof eTableTypes;
  dateLibrary: typeof dayjs;
  userVerificationMessageTemplate: string;
  userVerificationTitleTemplate: string;
  getRandomVerificationCode: typeof getRandomVerificationCode;
  eMessageType: typeof eMessageType;
  verifyDuration: string;
}

export interface iUserVerificationInput {
  email: string;
}

export interface iUserVerificationItem extends iUserVerificationInput {
  pk: string;
  sk: string;
  verification_message: string;
  verification_message_title: string;
  expiration_date: number;
}

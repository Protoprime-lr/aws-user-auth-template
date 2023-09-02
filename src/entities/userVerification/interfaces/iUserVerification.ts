import dayjs from 'dayjs';
import { v4 as uuid } from 'uuid';
import { eTableTypes } from '../../../common/enums/tableTypes';
import getRandomVerificationCode from '../helpers/getRandomVerificationCode';
import { eMessageType } from '../../../common/enums/messageType';
import { UsersCacheDynamooseSchema } from '../../../common/schemas/dynamooseSchema';

export interface iUserVerificationDeps {
  eTableTypes: typeof eTableTypes;
  dateLibrary: typeof dayjs;
  userVerificationMessageTemplate: string;
  userVerificationTitleTemplate: string;
  getRandomVerificationCode: typeof getRandomVerificationCode;
  eMessageType: typeof eMessageType;
  verifyDuration: string;
  dynamooseSchema: typeof UsersCacheDynamooseSchema;
  uuid: typeof uuid;
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

import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import sendEmailAdapter from '../../../adapters/sendEmailAdapter/index';
import { eMessageType } from '../../../common/enums/messageType';

export interface iSendVerifyEmailDomainInput {
  email: string;
}
export interface iSendVerifyEmailDomainDeps extends iCommonDependencies {
  sendEmailAdapter: typeof sendEmailAdapter;
  verifyEmailMessage: string;
  verifyEmailTitle: string;
  eMessageType: typeof eMessageType;
}

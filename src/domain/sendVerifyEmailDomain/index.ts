import domainCommonDeps from '../common/domainCommonDeps';
import sendEmailAdapter from '../../adapters/sendEmailAdapter/index';
import sendVerifyEmailDomainInstance from './sendVerifyEmailDomain';
import { eMessageType } from '../../common/enums/messageType';

const sendVerifyEmailDomain = sendVerifyEmailDomainInstance({
  ...domainCommonDeps,
  sendEmailAdapter,
  verifyEmailMessage:
    process.env.VERIFY_EMAIL_MESSAGE ?? `${eMessageType.text}#empty message`,
  verifyEmailTitle: process.env.VERIFY_EMAIL_TITLE ?? 'empty title',
  eMessageType,
});

export default sendVerifyEmailDomain;

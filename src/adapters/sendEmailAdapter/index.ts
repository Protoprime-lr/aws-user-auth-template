import adapterCommonDeps from '../common/adapterCommonDeps';
import sendEmailInfra from '../../infrastructure/sendEmail/index';
import sendEmailAdapterInstance from './sendEmailAdapter';

const sendVerificationEmailAdapter = sendEmailAdapterInstance({
  ...adapterCommonDeps,
  sendEmailInfra,
  sourceEmail: process.env.SYSTEM_EMAIL ?? '',
});

export default sendVerificationEmailAdapter;

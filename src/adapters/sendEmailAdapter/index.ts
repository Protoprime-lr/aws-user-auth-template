import adapterCommonDeps from '../common/adapterCommonDeps';
import sendEmailInfra from '../../infrastructure/sendEmail/index';
import sendEmailAdapterInstance from './sendEmailAdapter';

const sendEmailAdapter = sendEmailAdapterInstance({
  ...adapterCommonDeps,
  sendEmailInfra,
  sourceEmail: process.env.SYSTEM_EMAIL ?? '',
});

export default sendEmailAdapter;

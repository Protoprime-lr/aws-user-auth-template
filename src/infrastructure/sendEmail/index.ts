import { verifyEmail } from 'rebased/service/downstream/ses';
import infraCommonDeps from '../common/infraCommonDeps';
import sendEmailInfraInstance from './sendEmailInfra';

const sendEmailInfra = sendEmailInfraInstance({
  ...infraCommonDeps,
  sendEmail: verifyEmail,
});

export default sendEmailInfra;

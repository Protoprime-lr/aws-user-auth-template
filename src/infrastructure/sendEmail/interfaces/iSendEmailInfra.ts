import { sendEmail } from 'rebased/service/downstream/ses';
import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';

export interface iSendEmailInfraInput {
  email: string;
}

export interface iSendEmailInfraDeps extends iCommonDependencies {
  sendEmail: typeof sendEmail;
}

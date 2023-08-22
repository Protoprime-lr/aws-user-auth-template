import { sendEmail } from 'rebased/service/downstream/ses';
import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';

export interface iSendEmailInfraInput {
  message: {
    text?: string;
    html?: string;
  };
  title: string;
  destination: string | string[];
  source: string;
}

export interface iSendEmailInfraDeps extends iCommonDependencies {
  sendEmail: typeof sendEmail;
}

import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import sendEmailInfra from '../../../infrastructure/sendEmail/index';

export interface iSendEmailAdapterDeps extends iCommonDependencies {
  sendEmailInfra: typeof sendEmailInfra;
  sourceEmail: string;
}

export interface iSendEmailAdapterInput {
  message: {
    text?: string;
    html?: string;
  };
  title: string;
  destination: string | string[];
}

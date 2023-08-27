import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import { iCommonDependencies } from '../../../interfaces/iCommonDeps';

export interface iGenerateAccessTokenDeps extends iCommonDependencies {
  generateToken: typeof jwt.sign;
  tokenSecret?: string;
  tokenDuration: string;
  dateLibrary: typeof dayjs;
}

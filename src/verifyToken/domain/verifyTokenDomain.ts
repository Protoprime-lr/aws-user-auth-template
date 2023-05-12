// import AWS from "aws-sdk"
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import ICommandOutput from '../../common/interfaces/ICommandOutput';
import ResponseModel, { IResponse } from '../../common/models/response';
import { verifyToken } from '../../common/services/CognitoRepository';

import VerifyTokenSchema from '../models/VerifyTokenSchema';

export default async function verifyTokenDomain(
  { body: inputData }: ICommandOutput,
  metadata: any
): Promise<IResponse> {
  new VerifyTokenSchema(inputData, metadata);
  let status = StatusCodes.OK;
  let message = ReasonPhrases.ACCEPTED;
  try {
    await verifyToken(inputData.token, inputData.roles);
  } catch (error) {
    console.log(error);
    status = error.status ?? StatusCodes.UNAUTHORIZED;
    message = ReasonPhrases.UNAUTHORIZED;
  }

  return ResponseModel.success(status, {
    message,
  });
}

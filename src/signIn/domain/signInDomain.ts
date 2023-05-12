// import AWS from "aws-sdk"
import { StatusCodes } from 'http-status-codes';
import ICommandOutput from '../../common/interfaces/ICommandOutput';
import { IResponse } from '../../common/models/response';
import { authUser } from '../../common/services/CognitoRepository';

interface IOutputBody {
  message: any;
  token?: string;
}

export default async function signInDomain({
  body: inputData,
}: ICommandOutput): Promise<IResponse> {
  let status = StatusCodes.OK;
  const body: IOutputBody = {
    message: 'Success',
  };
  console.log('MARTIN_LOG=> inputData', JSON.stringify(inputData));
  try {
    const payloadData = JSON.parse(JSON.stringify(inputData));
    delete payloadData.password;

    const response = await authUser(inputData);

    console.log('MARTIN_LOG=> login response', JSON.stringify(response));

    body.token = response?.AuthenticationResult?.IdToken;
  } catch (error) {
    status = StatusCodes.CONFLICT;
    body.message = error?.message;
  }

  return { status, body };
}

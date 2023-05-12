// import AWS from "aws-sdk"
import { ErrorHandled } from 'rebased/util/error';
import { StatusCodes } from 'http-status-codes';
import ICommandOutput from '../../common/interfaces/ICommandOutput';
import ResponseModel, { IResponse } from '../../common/models/response';
import ValidateGetUsersByIdInput from '../models/ValidateGetUsersByIdInput';
import TableInstance from '../../common/utils/builders/TableInstance';

export default async function profileDomain(
  inputData: ICommandOutput,
  meta: any
): Promise<IResponse> {
  // validamos input
  new ValidateGetUsersByIdInput(inputData.parameters, meta);

  try {
    const response = await TableInstance.getItem({
      id: inputData.parameters?.id,
    });

    console.log('MARTIN_LOG=> profile output', JSON.stringify(response));

    if (!response) {
      throw new ErrorHandled('User not found', {
        code: 'USER_NOT_FOUND',
        status: StatusCodes.NOT_FOUND,
      });
    }

    return ResponseModel.success(StatusCodes.OK, response);
  } catch (error) {
    return ResponseModel.error({
      status: error.status ?? StatusCodes.CONFLICT,
      code: error.code,
      message: error.message,
    });
  }
}

// import AWS from "aws-sdk"
import { StatusCodes } from 'http-status-codes';
import ICommandOutput from '../../common/interfaces/ICommandOutput';
import ResponseModel, { IResponse } from '../../common/models/response';
import {
  addUserToGroup,
  createUserCognito,
} from '../../common/services/CognitoRepository';
import buildUserAtts from '../helpers/buildUserAtts';
import UserItem from '../models/UserItem';
import { IUserTableItem } from '../interfaces/user.interface';
import TableInstance from '../../common/utils/builders/TableInstance';
import isTest from '../../common/utils/isTest';

export default async function signUpDomain({
  body: inputData,
}: ICommandOutput): // meta: any
Promise<IResponse> {
  // new SignUpSchema(inputData,meta);
  let status = StatusCodes.CREATED;
  let message = 'User Sign Up Successful';
  try {
    const formatedAtts = buildUserAtts({
      email: inputData.email,
      email_verified: 'true',
    });

    console.log('=============================');
    console.log('CREATING USER');

    const creatingUser = await createUserCognito(inputData, formatedAtts);

    console.log('CREATING USER RESPONSE', JSON.stringify(creatingUser));

    console.log('=============================');

    console.log('ADDING USER TO GROUP');
    const addingUserToGroup = await addUserToGroup(inputData);

    console.log(
      'ADDING USER TO GROUP RESPONSE',
      JSON.stringify(addingUserToGroup)
    );

    const tablePayload: IUserTableItem = new UserItem({
      ...inputData,
      ...creatingUser,
    }).get();

    console.log('TablePayload', JSON.stringify(tablePayload));

    if (!isTest) {
      // guardamos en la tabla
      await TableInstance.createItem(tablePayload);
    }
  } catch (error) {
    status = error.status ?? StatusCodes.CONFLICT;
    message = error?.message;
  }

  return ResponseModel.success(status, {
    message,
  });
}

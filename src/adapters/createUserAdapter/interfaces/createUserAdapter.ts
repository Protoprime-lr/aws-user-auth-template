import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import { createItemTableInfra } from '../../../infrastructure/tableInfra/index';
import UserEntity from '../../../entities/userEntity/index';
import { IUserItem } from '../../../common/interfaces/IUser';

export interface iCreateUserAdapterDeps extends iCommonDependencies {
  createUserInfra: typeof createItemTableInfra;
  UserEntity: typeof UserEntity;
}

export interface iCreateUserAdapterInput {
  payload: IUserItem;
}

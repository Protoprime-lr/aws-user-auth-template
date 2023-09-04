import { iCommonDependencies } from '../../../../common/interfaces/iCommonDeps';
import { updateItemTableInfra } from '../../../../infrastructure/tableInfra/index';
import UserEntity from '../../../../entities/userEntity/index';

export interface iUpdateUserAdapterInput {
  params: { pk: string; sk: string };
  payload: any;
}

export interface iUpdateUserAdapterDeps extends iCommonDependencies {
  updateItemTableInfra: typeof updateItemTableInfra;
  UserEntity: typeof UserEntity;
  UsersTableName: string;
}

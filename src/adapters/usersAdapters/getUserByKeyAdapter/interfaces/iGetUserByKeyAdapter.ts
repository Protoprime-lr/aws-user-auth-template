import { eTableTypes } from '../../../../common/enums/tableTypes';
import { iCommonDependencies } from '../../../../common/interfaces/iCommonDeps';
import { queryItemTableInfra } from '../../../../infrastructure/tableInfra';
import UserEntity from '../../../../entities/userEntity/index';

export interface iGetUserByKeyAdapterInput {
  email: string;
}

export interface iGetUserByKeyAdapterDeps extends iCommonDependencies {
  queryItemTableInfra: typeof queryItemTableInfra;
  TableTypes: typeof eTableTypes;
  UserEntity: typeof UserEntity;
  UsersTableName: string;
}

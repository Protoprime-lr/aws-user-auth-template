import { eTableTypes } from '../../../common/enums/tableTypes';
import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import { queryItemTableInfra } from '../../../infrastructure/tableInfra';

export interface iGetUserByKeyAdapterInput {
  email: string;
}

export interface iGetUserByKeyAdapterDeps extends iCommonDependencies {
  queryItemTableInfra: typeof queryItemTableInfra;
  TableTypes: typeof eTableTypes;
}

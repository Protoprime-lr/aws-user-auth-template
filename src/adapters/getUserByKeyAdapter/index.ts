import adapterCommonDeps from '../common/adapterCommonDeps';
import getUserByKeyAdapterInstance from './getUserByKeyAdapter';
import { queryItemTableInfra } from '../../infrastructure/tableInfra';
import { eTableTypes } from '../../common/enums/tableTypes';
import UserEntity from '../../entities/userEntity/index';

const getUserByKeyAdapter = getUserByKeyAdapterInstance({
  ...adapterCommonDeps,
  queryItemTableInfra,
  TableTypes: eTableTypes,
  UserEntity,
});

export default getUserByKeyAdapter;

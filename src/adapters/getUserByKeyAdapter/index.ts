import adapterCommonDeps from '../common/adapterCommonDeps';
import getUserByKeyAdapterInstance from './getUserByKeyAdapter';
import { queryItemTableInfra } from '../../infrastructure/tableInfra';
import { eTableTypes } from '../../common/enums/tableTypes';

const getUserByKeyAdapter = getUserByKeyAdapterInstance({
  ...adapterCommonDeps,
  queryItemTableInfra,
  TableTypes: eTableTypes,
});

export default getUserByKeyAdapter;

import {
  deleteTableItem,
  queryTableItem,
  saveTableItem,
  updateTableItem,
} from './tableInfra';
import TableInstance from '../../common/utils/builders/TableInstance';
import infraCommonDeps from '../common/infraCommonDeps';

const tableInfraCommonDeps = {
  ...infraCommonDeps,
  TableInstance,
};

export const createItemTableInfra = saveTableItem(tableInfraCommonDeps);

export const queryItemTableInfra = queryTableItem(tableInfraCommonDeps);

export const deleteItemTableInfra = deleteTableItem(tableInfraCommonDeps);

export const updateItemTableInfra = updateTableItem(tableInfraCommonDeps);

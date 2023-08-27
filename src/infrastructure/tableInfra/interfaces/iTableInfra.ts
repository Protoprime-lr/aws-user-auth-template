import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import TableInstance from '../../../common/utils/builders/TableInstance';

export interface iTableDeps extends iCommonDependencies {
  TableInstance: typeof TableInstance;
}

import commonDeps from '../../common/commonDeps';
import { errorLayers } from '../../common/constants/errorLayers';
import ErrorNames from '../../common/enums/errorNames.enum';
import { iCommonDependencies } from '../../common/interfaces/iCommonDeps';

const adapterCommonDeps: iCommonDependencies = {
  ...commonDeps,
  DefaultErrorName: ErrorNames.FAULT_ADAPTER,
  ErrorLayer: errorLayers.ADAPTER,
};

export default adapterCommonDeps;

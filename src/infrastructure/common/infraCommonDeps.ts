import { iInfraCommonDeps } from './interfaces/iInfraCommonDeps';
import ErrorNames from '../../common/enums/errorNames.enum';
import { errorLayers } from '../../common/constants/errorLayers';
import commonDeps from '../../common/commonDeps';

const infraCommonDeps: iInfraCommonDeps = {
  ...commonDeps,
  DefaultErrorName: ErrorNames.FAULT_INFRASTRUCTURE,
  ErrorLayer: errorLayers.INFRASTRUCTURE,
};

export default infraCommonDeps;

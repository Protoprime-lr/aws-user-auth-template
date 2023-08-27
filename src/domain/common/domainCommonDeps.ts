import commonDeps from '../../common/commonDeps';
import { errorLayers } from '../../common/constants/errorLayers';
import ErrorNames from '../../common/enums/errorNames.enum';
import { iCommonDependencies } from '../../common/interfaces/iCommonDeps';

const domainCommonDeps: iCommonDependencies = {
  ...commonDeps,
  DefaultErrorName: ErrorNames.FAULT_DOMAIN,
  ErrorLayer: errorLayers.DOMAIN,
};

export default domainCommonDeps;

import commonDeps from '../../common/commonDeps';
import { errorLayers } from '../../common/constants/errorLayers';
import ErrorNames from '../../common/enums/errorNames.enum';
import { iCommonDependencies } from '../../common/interfaces/iCommonDeps';

const controllerCommonDeps: iCommonDependencies = {
  ...commonDeps,
  DefaultErrorName: ErrorNames.FAULT_CONTROLLER,
  ErrorLayer: errorLayers.CONTROLLER,
};

export default controllerCommonDeps;

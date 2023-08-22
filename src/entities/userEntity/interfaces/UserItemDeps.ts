import dayjs from 'dayjs';
import isTest from '../../../common/utils/isTest';

interface iUserItemDeps {
  dateLibrary: typeof dayjs;
  isTest: typeof isTest;
}

export default iUserItemDeps;

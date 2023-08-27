import { errorLayers } from '../../../constants/errorLayers';

const isValidLayer = (input) => {
  return (
    Object.values(errorLayers).find((layer) => {
      let prefix = '';
      if (layer.includes('#')) {
        prefix = `${layer.split('#')[0]}#`;
      } else {
        prefix = layer;
      }
      return input.includes(prefix);
    }) !== undefined
  );
};
export default isValidLayer;

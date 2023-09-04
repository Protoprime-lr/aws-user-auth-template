const inEnumerator = (eEnum: any, value: any) => {
  return Object.values(eEnum).find((val) => `${val}` === value) !== undefined;
};

export default inEnumerator;

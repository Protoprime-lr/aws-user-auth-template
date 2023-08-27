const throwTestError = (test?: boolean) => {
  // Esto tirara un TypeError
  if (test) {
    const a: any = {};
    return a.b.c;
  }
};

export default throwTestError;

function buildUserAtts(payload) {
  const attributes = Object.keys(payload);
  return attributes.map((att) => ({ Name: att, Value: payload[att] }));
}

export default buildUserAtts;

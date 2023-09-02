import dynamoose from 'dynamoose';

export const UsersDynamooseSchema = new dynamoose.Schema(
  {
    pk: { type: String, hashKey: true },
    sk: { type: String, rangeKey: true },
    type: {
      type: String,
      index: {
        name: 'GSI_TYPE',
        type: 'global',
      },
    },
  },
  { saveUnknown: true }
);

export const UsersCacheDynamooseSchema = new dynamoose.Schema(
  {
    pk: { type: String, hashKey: true },
    sk: { type: String, rangeKey: true },
    id: {
      type: String,
      index: {
        name: 'GSI_ID',
        type: 'global',
      },
    },
  },
  { saveUnknown: true }
);

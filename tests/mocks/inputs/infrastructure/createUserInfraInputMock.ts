import UserEntity from '../../../../src/entities/userEntity';
import signupPayload from '../common/signupPayload';

export const createUserInfraInputMock200 = {
  schema: UserEntity.getDynamooseModel(),
  input: {
    pk: `USER#${signupPayload.email}`,
    sk: 'USER#data',
    type: 'USER',
    role: 'default',
    verified: false,
    ...signupPayload,
  },
  tableName: 'sarasa',
};

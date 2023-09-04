import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import usersTableAttributes from '../../mocks/extra/usersTableAttributes.json';
import { createTable, deleteTable } from '../../utils/aws/manageDynamoTables';
import getUserByKeyAdapter from '../../../src/adapters/usersAdapters/getUserByKeyAdapter/index';
import createUserAdapter from '../../../src/adapters/usersAdapters/createUserAdapter';
import { createUserAdapterInputMock200 } from '../../mocks/inputs/adapters/createUserAdapterInputMock';
import {
  getUserByKeyAdapterInputMock200,
  getUserByKeyAdapterInputMock404,
} from '../../mocks/inputs/adapters/getUserByKeyAdapterInputMock';
import { getUserByKeyAdapterOutputMock200 } from '../../mocks/outputs/adapters/getUserByKeyAdapterOutputMock';

const tableName = process.env.USERS_TABLE;
const testSuiteName = 'getUserByKeyAdapter';

describe(`Unit Test - Adapter - ${testSuiteName}`, () => {
  beforeAll(async () => {
    await createTable({
      tableName,
      ...usersTableAttributes,
    });
    await createUserAdapter({ payload: createUserAdapterInputMock200 });
  });

  afterAll(async () => {
    await deleteTable(tableName);
  });

  it(`${testSuiteName} - 200`, async () => {
    const testName = `${testSuiteName}200`;
    const inputMock = getUserByKeyAdapterInputMock200;
    const outputMock = getUserByKeyAdapterOutputMock200;
    const response = await getUserByKeyAdapter(inputMock);

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);
  });

  it(`${testSuiteName} - 404`, async () => {
    const inputMock = getUserByKeyAdapterInputMock404;
    const response = await getUserByKeyAdapter(inputMock);

    expect(response).toBeUndefined();
  });
});

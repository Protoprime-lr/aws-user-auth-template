import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import userVerificationAdapter from '../../../src/adapters/userVerificationAdapter/index';
import { userVerificationAdapterInputMock200 } from '../../mocks/inputs/adapters/userVerificationAdapterInputMock';
import { userVerificationAdapterOutputMock200 } from '../../mocks/outputs/adapters/userVerificationAdapterOutputMock';
import { createTable, deleteTable } from '../../utils/aws/manageDynamoTables';
import usersTableAttributes from '../../mocks/extra/usersTableAttributes.json';

const tableName = process.env.USERS_TABLE;

const testSuiteName = 'userVerificationAdapter';

describe(`Unit Test - Adapter - ${testSuiteName}`, () => {
  beforeEach(async () => {
    await createTable({
      tableName,
      ...usersTableAttributes,
    });
  });

  afterEach(async () => {
    await deleteTable(tableName);
  });

  it(`${testSuiteName} - 200`, async () => {
    const testName = `${testSuiteName}200`;
    const inputMock = userVerificationAdapterInputMock200;
    const outputMock = userVerificationAdapterOutputMock200;

    const response = await userVerificationAdapter(inputMock);

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);
  });
});

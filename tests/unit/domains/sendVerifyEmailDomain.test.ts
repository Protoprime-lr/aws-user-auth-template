import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import { verifyEmail } from '../../utils/aws/manageSesData';
import usersTableAttributes from '../../mocks/extra/usersTableAttributes.json';
import sendVerifyEmailDomain from '../../../src/domain/sendVerifyEmailDomain/index';
import { sendVerifyEmailDomainInputMock200 } from '../../mocks/inputs/domain/sendVerifyEmailDomainInputMock';
import { sendVerifyEmailDomainOutputMock200 } from '../../mocks/outputs/domain/sendVerifyEmailDomainOutputMock';
import { createTable, deleteTable } from '../../utils/aws/manageDynamoTables';

const tableName = process.env.USERS_TABLE;
const testSuiteName = 'sendVerifyEmailDomain';

describe(`Unit Test - Domain - ${testSuiteName}`, () => {
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
    const inputMock = sendVerifyEmailDomainInputMock200;
    const outputMock = sendVerifyEmailDomainOutputMock200;

    await verifyEmail(inputMock.email);

    const response = await sendVerifyEmailDomain(inputMock);

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);
  });
});

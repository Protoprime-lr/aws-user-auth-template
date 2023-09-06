import outputTestResponse from '../../utils/outputTestResponse';
import usersTableAttributes from '../../mocks/extra/usersTableAttributes.json';
import usersCacheTableAttributes from '../../mocks/extra/usersCacheTableAttributes.json';
import { createTable, deleteTable } from '../../utils/aws/manageDynamoTables';

import createUserAdapter from '../../../src/adapters/usersAdapters/createUserAdapter';
import { createUserAdapterInputMock200 } from '../../mocks/inputs/adapters/createUserAdapterInputMock';
import createUserVerificationAdapter from '../../../src/adapters/userVerificationAdapters/createUserVerificationAdapter';
import verifyEmailController from '../../../src/controller/verifyEmail/index';

const userTable = process.env.USERS_TABLE;
const userCacheTable = process.env.USERS_CACHE_TABLE;
const testSuiteName = 'verifyEmailController';

describe(`Unit Test - Controller - ${testSuiteName}`, () => {
  beforeEach(async () => {
    await createTable({
      tableName: userTable,
      ...usersTableAttributes,
    });

    await createTable({
      tableName: userCacheTable,
      ...usersCacheTableAttributes,
    });
  });

  afterEach(async () => {
    await deleteTable(userTable);
    await deleteTable(userCacheTable);
  });

  it(`${testSuiteName} - 200`, async () => {
    const testName = `${testSuiteName}200`;
    await createUserAdapter({ payload: createUserAdapterInputMock200 });
    const userVerification = await createUserVerificationAdapter({
      email: createUserAdapterInputMock200.email,
    });
    // const outputMock = sendVerifyEmailDomainOutputMock200;

    const response = await verifyEmailController({
      query: {
        code: userVerification.verification_code,
      },
      parameters: {
        id: userVerification.id,
      },
    });

    outputTestResponse({
      testName,
      payload: response,
    });

    // regressionTest(outputMock, response, testName);
  });

  // it(`${testSuiteName} - 409 Verification Not Found`, async () => {
  //   const testName = `${testSuiteName}409`;
  //   // const outputMock = sendVerifyEmailDomainOutputMock200;
  //   await verifyEmailDomain({
  //     verificationCode: 'fake',
  //     verificationId: 'fake',
  //   }).catch((error) => {
  //     outputTestResponse({
  //       testName,
  //       payload: error,
  //     });
  //   });

  //   // regressionTest(outputMock, response, testName);
  // });

  // it(`${testSuiteName} - 409 User Not Found`, async () => {
  //   const testName = `${testSuiteName}409_B`;
  //   // const outputMock = sendVerifyEmailDomainOutputMock200;
  //   const userVerification = await createUserVerificationAdapter({
  //     email: createUserAdapterInputMock200.email,
  //   });

  //   await verifyEmailDomain({
  //     verificationCode: userVerification.verification_code,
  //     verificationId: userVerification.id,
  //   }).catch((error) => {
  //     outputTestResponse({
  //       testName,
  //       payload: error,
  //     });
  //   });

  //   // regressionTest(outputMock, response, testName);
  // });
});

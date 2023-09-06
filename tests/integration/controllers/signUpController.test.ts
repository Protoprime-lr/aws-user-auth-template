import { createTable, deleteTable } from '../../utils/aws/manageDynamoTables';
import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import usersTableAttributes from '../../mocks/extra/usersTableAttributes.json';
import { signUpControllerInputMock200 } from '../../mocks/inputs/controller/signUpControllerInputMock';
import signUpController from '../../../src/controller/signUp/index';
import {
  signUpControllerOutputMock200,
  signUpControllerOutputMock409,
} from '../../mocks/outputs/controller/signUpControllerOutputMock';
import createUserAdapter from '../../../src/adapters/usersAdapters/createUserAdapter';
import { verifyEmail } from '../../utils/aws/manageSesData';

const tableName = process.env.USERS_TABLE;
const testSuiteName = 'signUpController';
const fakeEmail = process.env.FAKE_EMAIL ?? '';

describe(`Unit Test - Controller - ${testSuiteName}`, () => {
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
    const inputMock = signUpControllerInputMock200;
    const outputMock = signUpControllerOutputMock200;
    await verifyEmail(fakeEmail);
    const response = await signUpController(inputMock);

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);
  });

  it(`${testSuiteName} - 409`, async () => {
    const testName = `${testSuiteName}409`;
    await createUserAdapter({
      payload: signUpControllerInputMock200.body,
    });

    const inputMock = signUpControllerInputMock200;
    const outputMock = signUpControllerOutputMock409;

    const response = await signUpController(inputMock);

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);

    // expect(response).toBeUndefined();
  });
});

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
import createUserAdapter from '../../../src/adapters/createUserAdapter';

const tableName = process.env.TABLE_NAME;
const testSuiteName = 'signUpController';

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

  //   it('addToTableInfra - Failed', async () => {
  //     const data: any = { ...itemMock };
  //     delete data.pk;

  //     await addToTableInfra(data).catch((error) => {
  //       outputTestResponse({ testName: 'addToTableInfra500', payload: error });

  //       expect(JSON.stringify(error)).toStrictEqual(JSON.stringify(addItem500));

  //       regressionTest(addItem500, error, 'addToTableInfra500');
  //     });
  //   });

  //   it('queryTable SIMPLE QUERY - 200', async () => {
  //     const testName = 'queryTableInfra200';
  //     await addToTableInfra(itemMock);

  //     const response = await queryTableInfra(queryTableInput200);

  //     outputTestResponse({
  //       testName,
  //       payload: response,
  //     });

  //     expect(Array.isArray(response)).toBeTruthy();
  //     expect(response.length).toBe(1);
  //     expect(Object.keys(response).length > 0).toBeTruthy();

  //     regressionTest(queryTableOutput200, response, testName);
  //   });

  //   it('queryTable GSI_TEST - 200', async () => {
  //     const testName = 'queryTableInfraGsi';
  //     await addToTableInfra(itemMock);

  //     const response = await queryTableInfra(queryTableInputGsi);

  //     outputTestResponse({ testName, payload: response });

  //     expect(Array.isArray(response)).toBeTruthy();
  //     expect(response.length).toBe(1);
  //     expect(Object.keys(response).length > 0).toBeTruthy();

  //     regressionTest(queryTableOutputGsi, response, testName);
  //   });

  //   it('queryTable - Failed', async () => {
  //     const testName = 'queryTableInfra500';
  //     await addToTableInfra(itemMock);

  //     await queryTableInfra(queryTableInput500).catch((error) => {
  //       outputTestResponse({ testName, payload: error });
  //       validateError(error, queryTableOutput500);
  //       regressionTest(queryTableOutput500, error, testName);
  //     });
  //   });

  //   it('deleteTable - 200', async () => {
  //     await addToTableInfra(itemMock);

  //     await deleteFromTableInfra({
  //       pk: itemMock.pk,
  //       sk: itemMock.sk,
  //     });
  //     // Se espera que termine sin errores, no se espera una response
  //   });
});

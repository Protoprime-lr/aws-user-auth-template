import { createItemTableInfra } from '../../../src/infrastructure/tableInfra/index';
import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import usersTableAttributes from '../../mocks/extra/usersTableAttributes.json';
import { createTable, deleteTable } from '../../utils/aws/manageDynamoTables';
import { createUserInfraInputMock200 } from '../../mocks/inputs/infrastructure/createUserInfraInputMock';
import { createUserInfraOutputMock200 } from '../../mocks/outputs/infrastructure/createUserInfraOutputMock';

const tableName = process.env.USERS_TABLE;

describe('Unit Test - Infrastructure - TableRepository', () => {
  beforeEach(async () => {
    await createTable({
      tableName,
      ...usersTableAttributes,
    });
  });

  afterEach(async () => {
    await deleteTable(tableName);
  });

  it('createItemTable - 200', async () => {
    const testName = 'createItemTableInfra200';
    const inputMock = createUserInfraInputMock200;
    const outputMock = createUserInfraOutputMock200;
    inputMock.tableName = tableName ?? inputMock.tableName;

    const response = await createItemTableInfra(inputMock);

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);
  });

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

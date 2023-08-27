import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import usersTableAttributes from '../../mocks/extra/usersTableAttributes.json';
import { createTable, deleteTable } from '../../utils/aws/manageDynamoTables';
import createUserDomain from '../../../src/domain/createUserDomain/index';
import { createUserDomainInputMock200 } from '../../mocks/inputs/domain/createUserDomainInputMock';
import { createUserDomainOutputMock200 } from '../../mocks/outputs/domain/createUserDomainOutputMock';

const tableName = process.env.TABLE_NAME;
const testSuiteName = 'createUserDomain';

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
    const inputMock = createUserDomainInputMock200;
    const outputMock = createUserDomainOutputMock200;
    const response = await createUserDomain({ payload: inputMock });

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);
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

import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import { verifyEmail } from '../../utils/aws/manageSesData';
import { sendEmailAdapterInputMock200 } from '../../mocks/inputs/adapters/sendEmailAdapterInputMock';
import sendEmailAdapter from '../../../src/adapters/sendEmailAdapter/index';
import {
  sendEmailAdapterOutputMock200,
  sendEmailAdapterOutputMock500,
} from '../../mocks/outputs/adapters/sendEmailAdapterOutputMock';

const testSuiteName = 'sendEmailAdapter';
const fakeEmail = process.env.FAKE_EMAIL ?? 'fake_sender@gmail.com';

describe(`Unit Test - Adapter - ${testSuiteName}`, () => {
  it(`${testSuiteName} - 200`, async () => {
    const testName = `${testSuiteName}200`;
    const inputMock = sendEmailAdapterInputMock200;
    const outputMock = sendEmailAdapterOutputMock200;

    await verifyEmail(fakeEmail);

    const response = await sendEmailAdapter(inputMock);

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);
  });

  it(`${testSuiteName} - 500`, async () => {
    const testName = `${testSuiteName}500`;
    const inputMock = sendEmailAdapterInputMock200;
    const outputMock = sendEmailAdapterOutputMock500;

    await sendEmailAdapter(inputMock).catch((response) => {
      outputTestResponse({
        testName,
        payload: response,
      });
      regressionTest(outputMock, response, testName);
    });
  });
});

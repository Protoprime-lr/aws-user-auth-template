import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import { sendEmailInfraInputMock200 } from '../../mocks/inputs/infrastructure/sendEmailInfraInputMock';
import sendEmailInfra from '../../../src/infrastructure/sendEmail/index';
import { verifyEmail } from '../../utils/aws/manageSesData';
import { sendEmailInfraOutputMock200 } from '../../mocks/outputs/infrastructure/sendEmailInfraOutputMock';

const testSuiteName = 'sendEmailInfra';
const fakeEmail = process.env.FAKE_EMAIL ?? '';
describe(`Unit Test - Infrastructure - ${testSuiteName}`, () => {
  it(`${testSuiteName} - 200`, async () => {
    const testName = `${testSuiteName}200`;
    const inputMock = sendEmailInfraInputMock200;
    const outputMock = sendEmailInfraOutputMock200;

    await verifyEmail(fakeEmail);

    const response = await sendEmailInfra(inputMock);

    outputTestResponse({
      testName,
      payload: response,
    });

    regressionTest(outputMock, response, testName);
  });
});

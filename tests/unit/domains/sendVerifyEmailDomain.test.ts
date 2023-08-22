import outputTestResponse from '../../utils/outputTestResponse';
import regressionTest from '../../utils/regressionTest';
import { verifyEmail } from '../../utils/aws/manageSesData';
import sendVerifyEmailDomain from '../../../src/domain/sendVerifyEmailDomain/index';
import { sendVerifyEmailDomainInputMock200 } from '../../mocks/inputs/domain/sendVerifyEmailDomainInputMock';
import { sendVerifyEmailDomainOutputMock200 } from '../../mocks/outputs/domain/sendVerifyEmailDomainOutputMock';

const testSuiteName = 'sendVerifyEmailDomain';

describe(`Unit Test - Domain - ${testSuiteName}`, () => {
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

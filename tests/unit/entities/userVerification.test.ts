import dayjs from 'dayjs';
import { eTableTypes } from '../../../src/common/enums/tableTypes';
import {
  userVerificationMessageTemplate,
  userVerificationTitleTemplate,
} from '../../../src/entities/userVerification/helpers/userVerificationMessageTemplate';
import UserVerification from '../../../src/entities/userVerification/index';
import { eMessageType } from '../../../src/common/enums/messageType';
import { UsersCacheDynamooseSchema } from '../../../src/common/schemas/dynamooseSchema';

const userVerificationUrl = process.env.USERS_VERIFICATION_URL ?? '';

describe('userVerificationInstance', () => {
  // Tests that the UserVerification instance is created with the correct properties when the constructor is called
  it('should create UserVerification instance with correct properties', () => {
    const input = { email: 'test@example.com' };
    const userVerification = new UserVerification(input);
    expect(userVerification.email).toBe(input.email);
    expect(userVerification.pk).toBe(`${eTableTypes.USER}#${input.email}`);
    const prefix = `${eTableTypes.VERIFICATION_CODE}#`;
    const regexPattern = new RegExp(`^${prefix}\\d{6}$`);
    expect(userVerification.sk).toMatch(regexPattern);
    expect(userVerification.id).toMatch(
      /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/
    );
    expect(userVerification.verification_code).toMatch(/^[0-9]{6}$/);
    expect(userVerification.expiration_date).toBeGreaterThan(dayjs().unix());
    expect(userVerification.verification_message_title).toBe(
      userVerificationTitleTemplate
    );
    expect(userVerification.verification_message).toBeDefined();
  });

  // Tests that the buildVerificationMessage method correctly replaces the placeholders in the verification message template
  it('should correctly replace placeholders in verification message template', () => {
    const input = { email: 'test@example.com' };
    const userVerification = new UserVerification(input);
    const expectedMessage = userVerificationMessageTemplate
      .replace(/\[verificationUrl\]/g, userVerification.buildVerificationUrl())
      .replace(/\[userEmail\]/, userVerification.email);
    expect(userVerification.verification_message[eMessageType.html]).toBe(
      expectedMessage
    );
  });

  // Tests that the buildVerificationUrl method correctly replaces the placeholders in the verification URL
  it('should correctly replace placeholders in verification URL', () => {
    const input = { email: 'test@example.com' };
    const userVerification = new UserVerification(input);
    const expectedUrl = userVerificationUrl
      .replace(':id', userVerification.id)
      .replace(':code', userVerification.verification_code);
    expect(userVerification.buildVerificationUrl()).toBe(expectedUrl);
  });

  // Tests that the get method correctly returns the UserVerification instance
  it('should correctly return the UserVerification instance', () => {
    const input = { email: 'test@example.com' };
    const userVerification = new UserVerification(input);
    expect(userVerification.get()).toBe(userVerification);
  });

  // Tests that the getDynamooseModel method correctly returns the dynamooseSchema
  it('should correctly return the UsersCacheDynamooseSchema', () => {
    expect(UserVerification.getDynamooseModel()).toBe(
      UsersCacheDynamooseSchema
    );
  });
});

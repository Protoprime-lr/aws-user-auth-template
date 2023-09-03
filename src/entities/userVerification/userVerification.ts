import {
  iUserVerificationDeps,
  iUserVerificationInput,
} from './interfaces/iUserVerification';

const userVerificationInstance = (dependencies: iUserVerificationDeps) => {
  const {
    dateLibrary,
    uuid,
    eTableTypes,
    eMessageType,
    userVerificationMessageTemplate,
    userVerificationTitleTemplate,
    getRandomVerificationCode,
    verifyDuration,
    dynamooseSchema,
  } = dependencies;

  class UserVerification {
    pk!: string;

    sk!: string;

    id!: string;

    expiration_date!: number;

    verification_message!: any;

    verification_message_title!: string;

    verification_code!: string;

    email: string;

    constructor(input: iUserVerificationInput) {
      this.email = input.email;

      this.build();
    }

    build() {
      const verificationCode = getRandomVerificationCode();
      this.pk = `${eTableTypes.USER}#${this.email}`;
      this.sk = `${eTableTypes.VERIFICATION_CODE}#${verificationCode}`;
      this.id = uuid();
      this.verification_code = verificationCode;
      this.expiration_date = dateLibrary().unix() + parseInt(verifyDuration);
      this.verification_message_title = userVerificationTitleTemplate;
      this.buildVerificationMessage();
    }

    buildVerificationMessage() {
      userVerificationMessageTemplate
        .replace(
          '[verificationUrl]',
          `www.fakedomain.com/users/verification/${this.id}`
        )
        .replace('[userEmail]', this.email);

      this.verification_message = {
        [eMessageType.html]: userVerificationMessageTemplate,
      };
    }

    get() {
      return this;
    }

    static getDynamooseModel() {
      return dynamooseSchema;
    }
  }

  return UserVerification;
};

export default userVerificationInstance;

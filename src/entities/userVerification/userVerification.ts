import {
  iUserVerificationDeps,
  iUserVerificationInput,
} from './interfaces/iUserVerification';

const userVerificationInstance = (dependencies: iUserVerificationDeps) => {
  const {
    dateLibrary,
    eTableTypes,
    eMessageType,
    userVerificationMessageTemplate,
    userVerificationTitleTemplate,
    getRandomVerificationCode,
    verifyDuration,
  } = dependencies;

  class UserVerification {
    pk!: string;

    sk!: string;

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
      this.expiration_date = dateLibrary().unix() + parseInt(verifyDuration);

      this.verification_message = {
        [eMessageType.html]: userVerificationMessageTemplate,
      };

      this.verification_message_title = userVerificationTitleTemplate;
    }

    get() {
      return this;
    }
  }

  return UserVerification;
};

export default userVerificationInstance;

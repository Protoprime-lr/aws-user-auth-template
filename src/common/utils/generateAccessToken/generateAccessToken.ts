import { iGenerateAccessTokenDeps } from './interfaces/iGenerateAccessToken';

const generateAccessTokenInstance =
  (dependencies: iGenerateAccessTokenDeps) => (payload: any) => {
    const {
      generateToken,
      tokenSecret,
      ErrorMessages,
      dateLibrary,
      tokenDuration,
    } = dependencies;
    if (!tokenSecret) {
      throw {
        message: ErrorMessages.MISSING_TOKEN_SECRET,
      };
    }

    const accessToken = generateToken(
      {
        ...payload,
        token_expiration_date: dateLibrary().unix() + Number(tokenDuration),
      },
      tokenSecret
    );

    return accessToken;
  };

export default generateAccessTokenInstance;

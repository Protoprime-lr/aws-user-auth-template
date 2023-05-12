import { ErrorHandled } from 'rebased/util/error';
import logger from 'rebased/_helper/logger';
import AWS, { CognitoIdentityServiceProvider } from 'aws-sdk';
import { StatusCodes } from 'http-status-codes';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import roles from '../../signUp/interfaces/roles.enum';

let CognitoInstance!: AWS.CognitoIdentityServiceProvider;
const {
  USERPOOL_ID: userPoolId = '',
  USERPOOL_CLIENT_ID: userPoolClientId = '',
  USERPOOL_USER_GROUP_DEFAULT: userDefaultGroup = '',
} = process.env;

export const createUserCognito = async (payload: any, formatedAttributes) => {
  console.log(
    'MARTIN_LOG=> createUser inputData',
    JSON.stringify({ payload, formatedAttributes })
  );
  if (!CognitoInstance) {
    CognitoInstance = new AWS.CognitoIdentityServiceProvider();
  }
  const { email, password } = payload;

  const params: CognitoIdentityServiceProvider.Types.AdminCreateUserRequest = {
    UserPoolId: userPoolId,
    Username: email,
    UserAttributes: formatedAttributes,
    MessageAction: 'SUPPRESS',
  };
  console.log('MARTIN_LOG=> params', JSON.stringify(params));

  const creationResponse = await CognitoInstance.adminCreateUser(params)
    .promise()
    .catch((e) => {
      logger.error(e);
      throw new ErrorHandled('Error creating a new user in Cognito', {
        code: 'ERROR_CREATING_COGNITO_USER',
        status: StatusCodes.CONFLICT,
      });
    });

  if (!creationResponse) {
    throw new ErrorHandled('Error creating a new user in Cognito', {
      code: 'ERROR_CREATING_COGNITO_USER',
      status: 409,
    });
  }

  console.log(
    'MARTIN_LOG=> creationResponse',
    JSON.stringify(creationResponse)
  );

  if (creationResponse?.User) {
    const paramsForPass = {
      Password: password,
      UserPoolId: userPoolId,
      Username: email,
      Permanent: true,
    };

    const passSetResponse = await CognitoInstance.adminSetUserPassword(
      paramsForPass
    ).promise();

    console.log(
      'MARTIN_LOG=> passSetResponse',
      JSON.stringify(passSetResponse)
    );
  }

  return {
    id: creationResponse.User?.Attributes?.find((e) => e.Name === 'sub')?.Value,
  };
};

export const authUser = async ({ email, password }) => {
  if (!CognitoInstance) {
    CognitoInstance = new AWS.CognitoIdentityServiceProvider();
  }

  const params = {
    AuthFlow: 'ADMIN_NO_SRP_AUTH',
    UserPoolId: userPoolId,
    ClientId: userPoolClientId,
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  return CognitoInstance.adminInitiateAuth(params).promise();
};

export const addUserToGroup = async ({ email }) => {
  if (!CognitoInstance) {
    CognitoInstance = new AWS.CognitoIdentityServiceProvider();
  }

  const params = {
    GroupName: userDefaultGroup,
    UserPoolId: userPoolId,
    Username: email,
  };

  return CognitoInstance.adminAddUserToGroup(params).promise();
};

export const verifyToken = async (token, inputRoles) => {
  const verifier = CognitoJwtVerifier.create({
    userPoolId: userPoolId,
    tokenUse: 'id',
    clientId: userPoolClientId,
    groups: inputRoles || userDefaultGroup,
  });

  return verifier.verify(
    token, // the JWT as string
    { groups: Object.values(roles) }
  );
};

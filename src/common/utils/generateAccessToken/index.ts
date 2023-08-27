import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import commonDeps from '../../commonDeps';
import generateAccessTokenInstance from './generateAccessToken';

const generateAccessToken = generateAccessTokenInstance({
  ...commonDeps,
  generateToken: jwt.sign,
  tokenSecret: process.env.ACCESS_TOKEN_SECRET,
  tokenDuration: process.env.ACCESS_TOKEN_DURATION ?? '86400',
  dateLibrary: dayjs,
});

export default generateAccessToken;

import bcrypt from 'bcryptjs';

const encryptPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 11);
  console.log('MARTIN_LOG=> hashedPassword', hashedPassword);
  return hashedPassword;
};

export default encryptPassword;

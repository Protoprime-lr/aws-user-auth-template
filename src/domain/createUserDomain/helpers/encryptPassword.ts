import bcrypt from 'bcrypt';

const encryptPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 11);

  return hashedPassword;
};

export default encryptPassword;

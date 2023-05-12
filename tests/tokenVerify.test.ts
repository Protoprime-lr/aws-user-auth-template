import verifyTokenDomain from '../src/verifyToken/domain/verifyTokenDomain';
// import roles from '../src/signUp/interfaces/roles.enum';

it('Testing token', async () => {
  const response = await verifyTokenDomain(
    { body: { token: process.env.token, role: 'asd' } },
    {}
  );
  console.log('RESPUESTA', response);
});

import commandInput from 'rebased/handler/input/commandApi';
import commandOutput from 'rebased/handler/output/commandApi';
import { commandMapper } from 'rebased/handler';
import signUpDomain from '../domain/signUpDomain';

export const handler = async (command: any, context: any) => {
  console.log(
    'INPUT',
    JSON.stringify({
      command,
      context,
      body: JSON.parse(command?.body ?? JSON.stringify({})),
    })
  );

  return commandMapper(
    { command, context },
    commandInput,
    signUpDomain,
    commandOutput
  );
};
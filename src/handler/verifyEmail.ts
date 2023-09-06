import commandInput from 'rebased/handler/input/commandApi';
import commandOutput from 'rebased/handler/output/commandApi';
import { commandMapper } from 'rebased/handler';

import iCommandInput from '../common/interfaces/ICommandInput';
import verifyEmailController from '../controller/verifyEmail';

export const handler = async (command: iCommandInput, context: any) => {
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
    verifyEmailController,
    commandOutput
  );
};

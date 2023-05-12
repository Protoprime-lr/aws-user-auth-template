/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

interface ILogger {
  emitter?: string;
  message?: string;
  payload?: any;
}

export default function devLog({ emitter, message, payload }: ILogger) {
  const prefix = 'MARTIN_LOG=>';
  const spacer = '-----------------';
  console.log(`${spacer} LOG START ${emitter ?? ''} ${spacer}`);

  if (message) {
    console.log(`${prefix} ${message}`);
  }

  if (payload) {
    Object.keys(payload).forEach((atribute) => {
      console.log(`${prefix} ${atribute} => `, payload[atribute]);
    });
  }
  console.log(`${spacer} END LOG ${emitter ?? ''} ${spacer}`);
}

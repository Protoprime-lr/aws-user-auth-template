export const sendEmailAdapterOutputMock500 = {
  message: 'MessageRejected-Email address not verified fake_senderr@gmail.com',
  status: 500,
  code: 'SEND_EMAIL_FAILED',
  layer: 'INFRA#SEND_EMAIL_FAILED',
  name: 'FAULT_INFRASTRUCTURE_ERROR',
};

export const sendVerifyEmailDomainOutputMock200 = {
  email_message_id:
    'ukwgctkhbndxfczq-vgzlfvcs-qosf-twyi-okyh-vhllhxzjzzev-hmrxbn',
};

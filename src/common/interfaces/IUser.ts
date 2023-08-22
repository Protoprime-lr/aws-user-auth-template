import roles from '../enums/roles.enum';
import EActiveStatus from '../enums/status.enum';
import { eTableTypes } from '../enums/tableTypes';

export interface iUserLoginInput {
  email: string;
  password: string;
}

export interface IUserItem extends iUserLoginInput {
  first_name?: string;
  last_name?: string;
  document_id?: string;
  contact_info?: {
    address?: {
      city?: string;
      province?: string;
      country?: string;
      street?: string;
      neighbor?: string;
    };
    phone_number?: {
      country_code: string;
      number: string;
    };
  };
}

export interface IUserTableItem extends IUserItem {
  status?: EActiveStatus;
  creation_date?: number;
  verified?: boolean;
  type: eTableTypes;
  pk: string;
  sk: string;
  role?: roles;
}

export interface IUserById {
  pk: string;
  sk: string;
}

import roles from '../enums/roles.enum';
import EActiveStatus from '../enums/status.enum';
import { eTableTypes } from '../enums/tableTypes';

export interface iUserPersonalData {
  email: string;
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
export interface iUserLoginInput {
  password: string;
}

export type iUserItem = iUserLoginInput & iUserPersonalData;

export interface iUserTableItem extends iUserItem {
  status?: EActiveStatus;
  creation_date?: number;
  verified?: boolean;
  type: eTableTypes;
  pk: string;
  sk: string;
  role?: roles;
}

export interface iUserById {
  pk: string;
  sk: string;
}

import EActiveStatus from '../enums/statusEnum';

export interface IUser {
  id: string;
  email: string;
  role?: string;
  name: string;
  last_name: string;
  document_id: string;
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
      number?: string;
    };
  };
}

export interface IUserTableItem extends IUser {
  status?: EActiveStatus;
  creation_date?: number;
}

export interface IUserById {
  id: string;
  role?: string;
}

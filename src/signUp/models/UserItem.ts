import { DateTime } from 'luxon';
import { IUserTableItem } from '../interfaces/user.interface';
import isTest from '../../common/utils/isTest';
import EActiveStatus from '../enums/statusEnum';
import roles from '../interfaces/roles.enum';

export default class UserItem implements IUserTableItem {
  id: string;

  email: string;

  role?: string;

  creation_date?: number;

  status: EActiveStatus | undefined;

  name: string;

  last_name: string;

  document_id: string;

  contact_info?:
    | {
        address?:
          | {
              city?: string | undefined;
              province?: string | undefined;
              country?: string | undefined;
              street?: string | undefined;
              neighbor?: string | undefined;
            }
          | undefined;
        phone_number?: { country_code: string; number?: string } | undefined;
      }
    | undefined;

  constructor(input: IUserTableItem) {
    this.id = input.id;
    this.email = input.email;
    this.role = input.role ?? roles.DEFAULT;
    this.creation_date = isTest
      ? input.creation_date
      : input.creation_date ?? DateTime.now().toMillis();
    this.status = EActiveStatus.ACTIVE;
    this.name = input.name;
    this.last_name = input.last_name;
    this.document_id = input.document_id;
    this.contact_info = input.contact_info;
  }

  get(): IUserTableItem {
    return this;
  }
}

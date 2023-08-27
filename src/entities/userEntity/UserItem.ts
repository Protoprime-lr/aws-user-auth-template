import EActiveStatus from '../../common/enums/status.enum';
import roles from '../../common/enums/roles.enum';
import { IUserTableItem } from '../../common/interfaces/IUser';
import iUserItemDeps from './interfaces/UserItemDeps';
import { eTableTypes } from '../../common/enums/tableTypes';

const UserItemObject = ({ dateLibrary }: iUserItemDeps) =>
  class UserItem implements IUserTableItem {
    pk!: string;

    sk!: string;

    password!: string;

    email: string;

    status?: EActiveStatus;

    creation_date?: number;

    role?: roles;

    first_name?: string;

    last_name?: string;

    document_id?: string;

    type!: eTableTypes;

    contact_info?: {
      address?: {
        city?: string;
        province?: string;
        country?: string;
        street?: string;
        neighbor?: string;
      };
      phone_number?: { country_code: string; number: string };
    };

    verified?: boolean;

    constructor(input: any) {
      this.pk = input.pk ?? `USER#${input.email}`;
      this.sk = input.sk ?? 'USER#data';
      this.email = input.email;
      this.password = input.password;
      this.role = input.role ?? roles.DEFAULT;
      this.creation_date = input.creation_date ?? dateLibrary().unix();
      this.status = EActiveStatus.ACTIVE;
      this.first_name = input.first_name;
      this.last_name = input.last_name;
      this.document_id = input.document_id;
      this.contact_info = input.contact_info;
      this.verified = input.verified ?? false;
      this.type = eTableTypes.USER;
    }

    get() {
      return this;
    }
  };

export default UserItemObject;

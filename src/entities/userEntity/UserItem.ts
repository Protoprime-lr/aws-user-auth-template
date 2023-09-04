import EActiveStatus from '../../common/enums/status.enum';
import roles from '../../common/enums/roles.enum';
import { IUserTableItem } from '../../common/interfaces/IUser';
import iUserItemDeps from './interfaces/UserItemDeps';
import { eTableTypes } from '../../common/enums/tableTypes';
import inEnumerator from '../../common/utils/inEnumerator';

const UserItemObject = ({ dateLibrary, dynamooseSchema }: iUserItemDeps) =>
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
      this.pk = input.pk;
      this.sk = input.sk;
      this.email = input.email;
      this.password = input.password;
      this.creation_date = input.creation_date;
      this.first_name = input.first_name;
      this.last_name = input.last_name;
      this.document_id = input.document_id;
      this.contact_info = input.contact_info;
      this.verified = input.verified ?? false;
      this.role = input.role;
      this.status = input.status;

      this.build();
    }

    build() {
      this.pk = this.pk ?? `${eTableTypes.USER}#${this.email}`;
      this.sk = this.sk ?? `${eTableTypes.USER}#data`;
      this.creation_date = this.creation_date ?? dateLibrary().unix();
      this.status = this.status ?? EActiveStatus.ACTIVE;
      this.type = eTableTypes.USER;
      this.setRole();
      this.setStatus();
    }

    setRole() {
      if (!inEnumerator(roles, this.role)) {
        this.role = roles.DEFAULT;
      }
    }

    setStatus() {
      if (!inEnumerator(EActiveStatus, this.status)) {
        this.status = EActiveStatus.DISABLED;
      }
    }

    static getDynamooseModel() {
      return dynamooseSchema;
    }
  };

export default UserItemObject;

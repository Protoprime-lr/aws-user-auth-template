import roles from '../../../src/common/enums/roles.enum';
import EActiveStatus from '../../../src/common/enums/status.enum';
import { eTableTypes } from '../../../src/common/enums/tableTypes';
import UserEntity from '../../../src/entities/userEntity/index';

describe('UserItemObject', () => {
  // Tests that UserItemObject can be instantiated with valid input
  it('should instantiate UserItemObject with valid input', () => {
    const input = {
      pk: 'USER#123',
      sk: 'USER#data',
      email: 'test@example.com',
      password: 'password123',
      role: roles.DEFAULT,
      creation_date: 1234567890,
      first_name: 'John',
      last_name: 'Doe',
      document_id: '1234567890',
      contact_info: {
        address: {
          city: 'New York',
          province: 'NY',
          country: 'USA',
          street: '123 Main St',
          neighbor: 'Downtown',
        },
        phone_number: {
          country_code: '+1',
          number: '1234567890',
        },
      },
      verified: true,
    };

    const userItem = new UserEntity(input);

    expect(userItem.pk).toBe(input.pk);
    expect(userItem.sk).toBe(input.sk);
    expect(userItem.email).toBe(input.email);
    expect(userItem.password).toBe(input.password);
    expect(userItem.role).toBe(input.role);
    expect(userItem.creation_date).toBe(input.creation_date);
    expect(userItem.first_name).toBe(input.first_name);
    expect(userItem.last_name).toBe(input.last_name);
    expect(userItem.document_id).toBe(input.document_id);
    expect(userItem.contact_info).toEqual(input.contact_info);
    expect(userItem.verified).toBe(input.verified);
    expect(userItem.type).toBe(eTableTypes.USER);
  });

  // Tests that UserItemObject sets default values for optional properties if not provided
  it('should set default values for optional properties if not provided', () => {
    const input = {
      pk: 'USER#123',
      sk: 'USER#data',
      email: 'test@example.com',
      password: 'password123',
    };
    const userItem = new UserEntity(input);

    expect(userItem.role).toBe(roles.DEFAULT);
    expect(userItem.creation_date).not.toBeNaN();
    expect(userItem.status).not.toBeUndefined();
    expect(userItem.first_name).toBeUndefined();
    expect(userItem.last_name).toBeUndefined();
    expect(userItem.document_id).toBeUndefined();
    expect(userItem.contact_info).toBeUndefined();
    expect(userItem.verified).toBe(false);
    expect(userItem.type).toBe(eTableTypes.USER);
  });

  // Tests that UserItemObject sets status to DISABLED if input status is not ACTIVE or DISABLED
  it('should set status to DISABLED if input status is not ACTIVE or DISABLED', () => {
    const input = {
      pk: 'USER#123',
      sk: 'USER#data',
      email: 'test@example.com',
      password: 'password123',
      status: 'INACTIVE',
    };

    const userItem = new UserEntity(input);

    expect(userItem.status).toBe(EActiveStatus.DISABLED);
  });

  // Tests that UserItemObject sets role to DEFAULT if input role is not a valid role
  it('should set role to DEFAULT if input role is not a valid role', () => {
    const input = {
      pk: 'USER#123',
      sk: 'USER#data',
      email: 'test@example.com',
      password: 'password123',
      role: 'ADMIN',
    };

    const userItem = new UserEntity(input);

    expect(userItem.role).toBe(roles.DEFAULT);
  });
});

export const STATUS_PREFIX = ':item';

export enum StatusCodes {
  ALREADY_EXISTS = 'ALREADY_EXISTS',
  MISSING_TABLE_NAME = 'MISSING_TABLE_NAME',
  ITEM_NOT_FOUND = ':item_NOT_FOUND',
  GET_ITEM_FAILED = 'GET_ITEM_FAILED',
  CREATE_SUCCESSED = 'CREATE_:item_SUCCESSED',
  CREATE_ERROR = 'CREATE_:item_ERROR',
  JSON_VALIDATION_FAILED = 'JSON_VALIDATION_FAILED',
}

export enum StatusMessages {
  ALREADY_EXISTS = 'An :item with that name already exists',
  CONDITIONAL_FAILED = 'The conditional request failed',
  NOT_FOUND = ':item not found',
  GET_ITEM_FAILED = 'Could not get any :item',
}

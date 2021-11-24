// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Admin, Visitor, Note } = initSchema(schema);

export {
  Admin,
  Visitor,
  Note
};
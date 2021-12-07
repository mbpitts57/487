// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Entry, PerAssessment, Admin, Visitor } = initSchema(schema);

export {
  Entry,
  PerAssessment,
  Admin,
  Visitor
};
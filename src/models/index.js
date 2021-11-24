// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PerAssessment, Admin, Visitor } = initSchema(schema);

export {
  PerAssessment,
  Admin,
  Visitor
};
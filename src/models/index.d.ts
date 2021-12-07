import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EntryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PerAssessmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VisitorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Entry {
  readonly id: string;
  readonly visName?: string;
  readonly visEmail?: string;
  readonly p_answer1?: string;
  readonly p_answer2?: string;
  readonly p_answer3?: string;
  readonly p_answer4?: string;
  readonly p_answer5?: string;
  readonly p_answer6?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Entry, EntryMetaData>);
  static copyOf(source: Entry, mutator: (draft: MutableModel<Entry, EntryMetaData>) => MutableModel<Entry, EntryMetaData> | void): Entry;
}

export declare class PerAssessment {
  readonly id: string;
  readonly p_answer1: string;
  readonly p_answer2: string;
  readonly p_answer3: string;
  readonly p_answer4?: string;
  readonly p_answer5: string;
  readonly p_answer6: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PerAssessment, PerAssessmentMetaData>);
  static copyOf(source: PerAssessment, mutator: (draft: MutableModel<PerAssessment, PerAssessmentMetaData>) => MutableModel<PerAssessment, PerAssessmentMetaData> | void): PerAssessment;
}

export declare class Admin {
  readonly id: string;
  readonly adminEmail: string;
  readonly adminPass: string;
  readonly adminLevel: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Admin, AdminMetaData>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}

export declare class Visitor {
  readonly id: string;
  readonly visName: string;
  readonly visEmail: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Visitor, VisitorMetaData>);
  static copyOf(source: Visitor, mutator: (draft: MutableModel<Visitor, VisitorMetaData>) => MutableModel<Visitor, VisitorMetaData> | void): Visitor;
}
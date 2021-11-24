import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VisitorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Admin {
  readonly id: string;
  readonly adminEmail?: string;
  readonly adminPass?: string;
  readonly adminLevel?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Admin, AdminMetaData>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}

export declare class Visitor {
  readonly id: string;
  readonly visName: string;
  readonly visEmail?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Visitor, VisitorMetaData>);
  static copyOf(source: Visitor, mutator: (draft: MutableModel<Visitor, VisitorMetaData>) => MutableModel<Visitor, VisitorMetaData> | void): Visitor;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}
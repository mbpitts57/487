/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVisitor = /* GraphQL */ `
  query GetVisitor($id: ID!) {
    getVisitor(id: $id) {
      id
      visName
      visEmail
      createdAt
      updatedAt
    }
  }
`;
export const listVisitors = /* GraphQL */ `
  query ListVisitors(
    $filter: ModelVisitorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisitors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        visName
        visEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
      id
      visName
      visEmail
      p_answer1
      p_answer2
      p_answer3
      p_answer4
      p_answer5
      p_answer6
      createdAt
      updatedAt
    }
  }
`;
export const listEntrys = /* GraphQL */ `
  query ListEntrys(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        visName
        visEmail
        p_answer1
        p_answer2
        p_answer3
        p_answer4
        p_answer5
        p_answer6
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
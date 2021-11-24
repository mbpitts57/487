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

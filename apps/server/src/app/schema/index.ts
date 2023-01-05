//import { ToDoMutations, ToDoQueries, ToDoTypes } from './';

import { ToDoTypes, ToDoQueries, ToDoMutations } from "./todo"

export const typeDefs = `#graphql
     type Query
     type Mutation
     ${ToDoTypes}
`
export const resolvers = {
    Query: {
        ...ToDoQueries,
    },
    Mutation: {
        ...ToDoMutations,
    }
}

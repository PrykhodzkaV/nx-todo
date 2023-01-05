import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './app/schema/index';
import {mongooseConnectDB} from './app/connectDB';
mongooseConnectDB();
const NX_PORT = process.env.NX_PORT;
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
startStandaloneServer(server, {
    listen: { port: Number(NX_PORT) },
}).then(({ url }) => console.log(`🚀 Server ready at: ${url}`));

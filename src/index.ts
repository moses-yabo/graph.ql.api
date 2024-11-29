import { ApolloServer ,} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema";
import { Mutation, Query,category,product } from "./resolvers";
import {categories,products,reviews} from "./data/db";


const server = new ApolloServer({
  typeDefs,
  resolvers:{
...Query,
...Mutation,
...category,
...product,

  }
});

startStandaloneServer(server,{
  context: async ()=>{
    return {
      categories,
      products,
      reviews
    }
  },
  listen:{ port: 8000 }
}).then(({url})=>{console.log('server is ready at',url)});
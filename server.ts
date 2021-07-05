const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    union Result = Book | Author

    type Author {
        name: String
    }

    type Achievement {
      id: ID
      name: String
    }

    type User {
        id: ID!
        username: String
        achivements: [Achievement]
    }

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
      id: ID!
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    book(id: ID!): Book
  }

`;

const books = [
  {
      id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
      id: '2',
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Result: {
        __resolveType(obj: any, context: any, info: any) {
            if(obj.name){
                return 'Author';
              }
              if(obj.title){
                return 'Book';
              }
              return null
        }
    },
  Query: {
    books: () => books,
    book: (parent: any, args: any) => books.find(b => b.id === args.id),
  },
};

class APIClass {
}

const dataSources = () => {
    return {
        dataSource: new APIClass()
    }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});

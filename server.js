const express = require("express");
const path = require("path");

const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000, () => {
  console.log("graphql server listening on port 5000");
});

import express from "express";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import schema from "./schema";

const PORT = 4000;
const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});

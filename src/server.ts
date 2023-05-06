import express from "express";
import cors from "cors";
import { graphqlHTTP } from 'express-graphql'

const app = express();

// connect to db

// middleware
app.use(cors());

app.use('/api', graphqlHTTP({
  schema: 
}))

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

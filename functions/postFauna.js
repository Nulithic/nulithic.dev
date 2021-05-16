const faunadb = require("faunadb");

const q = faunadb.query;
const serverClient = new faunadb.Client({ secret: process.env.REACT_APP_FAUNADB_SERVER_SECRET || "" });

exports.handler = async (event) => {
  try {
    const req = await serverClient.query(q.Create(q.Collection("APITest"), { data: JSON.parse(event.body || "") }));
    return { statusCode: 200, body: JSON.stringify([req.data]) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

const faunadb = require("faunadb");

const q = faunadb.query;
const serverClient = new faunadb.Client({ secret: process.env.REACT_APP_FAUNADB_SERVER_SECRET });

exports.handler = async (event) => {
  const postData = JSON.parse(event.body);
  if (postData.password === process.env.REACT_APP_APITEST_SECRET) {
    try {
      const req = await serverClient.query(q.Create(q.Collection("APITest"), { data: postData }));
      return { statusCode: 200, body: JSON.stringify([req.data]) };
    } catch (err) {
      return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
    }
  } else {
    return { statusCode: 200, body: JSON.stringify([{ firstData: "Wrong", secondData: "Password" }]) };
  }
};

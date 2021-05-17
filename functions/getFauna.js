const faunadb = require("faunadb");

const q = faunadb.query;
const serverClient = new faunadb.Client({ secret: process.env.REACT_APP_FAUNADB_SERVER_SECRET });

exports.handler = async () => {
  try {
    const req = await serverClient.query(
      q.Map(
        q.Paginate(q.Match(q.Index("getAll"))),
        q.Lambda((x) => q.Get(x))
      )
    );
    return { statusCode: 200, body: JSON.stringify(req.data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

exports.handler = (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 500, body: "Request was not a POST." };
  } else return { statusCode: 200, body: event.body };
};

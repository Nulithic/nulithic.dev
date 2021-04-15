exports.handler = (event) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 500, body: "Request was not a GET." };
  } else return { statusCode: 200, body: "Hello World" };
};

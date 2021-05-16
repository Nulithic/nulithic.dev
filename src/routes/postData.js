import axios from "axios";

const postSimple = async (data) => {
  const req = await axios.post("/api/postSimple", data);
  return req.data;
};

const postFauna = async (data) => {
  const req = await axios.post("/api/postFauna", data);
  return req.data;
};

export { postSimple, postFauna };

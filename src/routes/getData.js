import axios from "axios";

const getSimple = async () => {
  const req = await axios.get("/api/getSimple");
  return req.data;
};

const getFauna = async () => {
  const req = await axios.get("/api/getFauna");
  console.log(req.data);

  return req.data;
};

export { getSimple, getFauna };

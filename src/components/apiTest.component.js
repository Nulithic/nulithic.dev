import React, { useState } from "react";
import { Box, Button, TextInput } from "grommet";

const APITest = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const req = await fetch("/api/getData");
    console.log(await req.text());
  };

  const postData = async () => {
    const req = await fetch("/api/postData", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(await req.json());
  };

  return (
    <Box basis="small" gap="small">
      <TextInput placeholder="Insert Data" size="medium" value={data} onChange={(event) => setData(event.target.value)} />
      <Button primary label="Get" onClick={getData} />
      <Button primary label="Post" onClick={postData} />
    </Box>
  );
};

export default APITest;

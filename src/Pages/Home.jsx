import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
const Home = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <Container maxWidth="md" >
        <h1>Home Page Containing Increment and Decrement Buttons</h1>
        <Typography gutterBottom variant="h3" component="div">
          {counter}
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Button size="md" variant="contained" onClick={increment}>
            Increment By 1
          </Button>
          <Button size="md" variant="contained" onClick={decrement}>
            Decrement By 1
          </Button>
          <Button size="md" variant="contained" onClick={reset}>
            Reset Values
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
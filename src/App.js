import React from 'react';
import { Stack } from "@mui/material";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Header />
      <Container />
    </Stack>
  );
}

export default App;

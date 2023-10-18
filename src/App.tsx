import { Container } from "@mui/material";
import "./app.css";
import { SideLibrary } from "./components";

function App() {
  return (
    <Container
      sx={{
        position: "flex",
      }}
    >
      <SideLibrary />
    </Container>
  );
}

export default App;

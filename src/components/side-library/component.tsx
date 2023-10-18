import { Container, Box, IconButton } from "@mui/material";
import { FunctionComponent } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const SideLibraryComponent: FunctionComponent = () => {
  return (
    <Container
      sx={{
        position: "fixed",
        border: "1px solid blue",
        width: "30%",
        padding: 0,
        margin: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          display: "flex",
          color: "white",
          border: "1px solid white",
        }}
      >
        <Box>
          <h3>Your Library</h3>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <IconButton color="secondary" aria-label="add an alarm">
            <AddCircleIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

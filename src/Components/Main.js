import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Main = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));

  const vt = upsm ? "h2" : "h4";

  const name = (
    <Typography variant={vt} component="span" color="primary">
      Razer
    </Typography>
  );

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        pb: upsm ? 4 : 8,
      }}
    >
      <Typography variant={vt} color="initial" sx={{ textAlign: "center" }}>
        Hi,
        <br />
        I'm {name}
        <br />
        Graphic Designer
      </Typography>
      <Button variant="contained" size="large" sx={{ mt: 4 }}>
        Contact
      </Button>
      <Box sx={{ mt: 4 }}>
        <LinkedInIcon fontSize="large" sx={{ mr: 4 }} />
        <GitHubIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default Main;

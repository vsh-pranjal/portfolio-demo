import {
  Box,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Art from "./Art";

const Work = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));

  const workLink = (
    <Link
      variant={upsm ? "h3" : "h4"}
      color="primary"
      sx={{
        fontFamily: "Poppins",
      }}
    >
      Works
    </Link>
  );

  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          py:4
        }}
      >
        <Box sx={{pb:2}}> {workLink} </Box>
        <Box>
          <Typography
            variant={upsm ? "h4" : "h5"}
            color="initial"
            sx={{ fontFamily: "Poppins" }}
          >
            My Works
          </Typography>
          <Art />
        </Box>
      </Box>
    </div>
  );
};

export default Work;

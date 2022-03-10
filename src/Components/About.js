import React from "react";
import { Link, Typography, Box, useTheme, useMediaQuery } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));

  const aboutLink = (
    <Link
      variant={upsm ? "h3" : "h4"}
      component="div"
      color="primary"
      sx={{
        fontFamily: "Poppins",
      }}
    >
      About
    </Link>
  );

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          py: 4,
        }}
      >
        <Box sx={{ pb: 4 }}>{aboutLink}</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-around" },
            alignItems: { xs: "center", sm: "center" },
          }}
        >
          <Box
            component="img"
            height="400px"
            src="Nanase2.jpg"
            alt="my pic"
            sx={{
              borderRadius: "15px",
              width: "300px",
            }}
          />

          <Box sx={{ p: 2, width: { sm: "50%" } }}>
            <Typography
              variant={upsm ? "h4" : "h5"}
              color="initial"
              sx={{ fontFamily: "Poppins", textAlign: { sm: "left" } }}
            >
              I'm Razer Darkness
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 2, textAlign: { sm: "left" } }}
            >
              I am a Graphic Designer / Illustrator. Currently I'm Under
              Graduating in Computer Field. Mostly like to illustrate some
              minimal things and also abstract and having a good hand in editing
              skills. And I'm also a Web Designer, works in frontend
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;

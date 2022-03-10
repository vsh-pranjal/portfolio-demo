import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Paper, Typography } from "@mui/material";

const imgs = [
  {
    name: "Abstract",
    url: "/img/rock/AbstracttWallpaper.png",
  },
  {
    name: "Ampli",
    url: "/img/rock/Ampli_1.png",
  },
  {
    name: "Anime Girl",
    url: "/img/rock/AnimeGirl.png",
  },
  {
    name: "Beach Girl",
    url: "/img/rock/BeachGirl.png",
  },
  {
    name: "Fire Smile",
    url: "/img/rock/FireSmile.png",
  },
  {
    name: "Glass Planet",
    url: "/img/rock/GlassPlanet.png",
  },
  {
    name: "IceCream",
    url: "/img/rock/IceCream.png",
  },
  {
    name: "Isometric Castle",
    url: "/img/rock/IsometricCastle.png",
  },
  {
    name: "Leaf Hand",
    url: "/img/rock/LeafHand.png",
  },
  {
    name: "Sketch Landscape",
    url: "/img/rock/SketchLandscape.png",
  },
  {
    name: "Star Trel",
    url: "/img/rock/StarTrel.png",
  },
  {
    name: "Teddy",
    url: "/img/rock/Teddy.png",
  },
];

const img = imgs.map((img) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Paper
        elevation={3}
        sx={{
          pb: 1,
        }}
      >
        <img src={img.url} alt="alt" width="100%" />
        <Typography variant="h6" color="initial">
          {img.name}
        </Typography>
      </Paper>
    </Grid>
  );
});

const Art = () => {
  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <Grid container spacing={2}>
        {img}
      </Grid>
    </Box>
  );
};

export default Art;

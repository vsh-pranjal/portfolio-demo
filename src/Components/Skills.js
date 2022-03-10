import React from "react";
import {
  Box,
  Link,
  Typography,
  LinearProgress,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const skills = [
  {
    name: "Photoshop",
    per: 80,
    icon: "https://img.icons8.com/color/480/000000/adobe-photoshop--v1.png",
  },
  {
    name: "illustrator",
    per: 90,
    icon: "https://img.icons8.com/color/480/000000/adobe-illustrator--v1.png",
  },
  {
    name: "Xd",
    per: 90,
    icon: "https://img.icons8.com/color/480/000000/adobe-xd--v1.png",
  },
  {
    name: "Lightroom",
    per: 95,
    icon: "https://img.icons8.com/color/480/000000/adobe-lightroom--v1.png",
  },
  {
    name: "Blender",
    per: 40,
    icon: "https://img.icons8.com/color/480/000000/blender-3d.png",
  },
  {
    name: "Filmora",
    per: 80,
    icon: "https://img.icons8.com/color/480/000000/filmora.png",
  },
];

const SkillCard = skills.map((skills) => {
  return (
    <Box
      key={skills.name}
      sx={{
        display: "flex",
        alignItems: "center",
        pt: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 1,
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            color="initial"
            sx={{
              fontStyle: "bold",
            }}
          >
            {skills.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {skills.per}%
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={skills.per} />
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: { xs: "none", sm: "flex" },
          ml: 4,
        }}
      >
        <Box
          component="img"
          src={skills.icon}
          alt={skills.name}
          sx={{
            height: "48px",
            width: "48px",
          }}
        />
      </Paper>
    </Box>
  );
});

const Skills = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));
  const skillLink = (
    <Link
      variant={upsm ? "h3" : "h4"}
      color="primary"
      sx={{
        fontFamily: "Poppins",
      }}
    >
      Skills
    </Link>
  );
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        mx: 2,
      }}
    >
      <Box sx={{pb:2}}>{skillLink}</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "space-around" },
          alignItems: { xs: "center", sm: "center" },
        }}
      >
        <Box
          sx={{
            textAlign: { sm: "center" },
          }}
        >
          <Typography
            variant={upsm ? "h4" : "h5"}
            color="initial"
            sx={{ fontFamily: "Poppins" }}
          >
            Professional Skills
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Some of my skills and about my apps in which I do my work and enjoy
            it.
          </Typography>
          {SkillCard}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;

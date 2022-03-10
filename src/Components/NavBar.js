import {
  AppBar,
  Box,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";


export default function NavBar() {
  const theme = useTheme();
  const flag = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box>
      <AppBar position="static" color="grey">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >

          <Typography
            variant={flag ? "h4" : "h5"}
            component="div"
            sx={{ fontFamily: "Poppins", ml: { sm: 4 } }}
          >
            Razer
          </Typography>
          {flag ? (
            <Box sx={{ mr: { sm: 4 } }}>
              <Link
                color="text.primary"
                underline="none"
                variant="h6"
                component="span"
                sx={{ fontFamily: "Poppins" }}
              >
                Home
              </Link>
              <Link
                color="text.primary"
                underline="none"
                variant="h6"
                component="span"
                sx={{ fontFamily: "Poppins", mx: 2 }}
              >
                About
              </Link>
              <Link
                color="text.primary"
                underline="none"
                variant="h6"
                component="span"
                sx={{ fontFamily: "Poppins" }}
              >
                Skills
              </Link>
              <Link
                color="text.primary"
                underline="none"
                variant="h6"
                component="span"
                sx={{ fontFamily: "Poppins", mx: 2 }}
              >
                Work
              </Link>
              <Link
                color="text.primary"
                underline="none"
                variant="h6"
                component="span"
                sx={{ fontFamily: "Poppins" }}
              >
                Contact
              </Link>
            </Box>
          ) : (
            <IconButton size="large" edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

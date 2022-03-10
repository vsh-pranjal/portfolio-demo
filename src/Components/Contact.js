import {
  Link,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Contact = () => {
  const theme = useTheme();
  const upsm = useMediaQuery(theme.breakpoints.up("sm"));
  const contactLink = (
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
    <Box
      sx={{
        textAlign: "center",
        py:4
      }}
    >
      {contactLink} 
   
      <Box sx={{px:{xs:1,sm:2}}}>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={upsm?8:5}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            mt: 1,
          }}
        >
          <Button variant="contained" color="primary" size="large">
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;

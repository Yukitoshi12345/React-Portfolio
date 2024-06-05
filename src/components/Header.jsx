import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Header() {
  const menuList = [
    {
      id: 1,
      title: "About Me",
    },
    {
      id: 2,
      title: "Portfolio",
    },
    {
      id: 3,
      title: "Contact",
    },
    {
      id: 4,
      title: "Resume",
    },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontWeight: "bold", letterSpacing: 1.2 }}
              >
                Yukitoshi Imaizumi-Zhou
              </Typography>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex" }}>
                {menuList.map((item) => (
                  <Button key={item.id} color="inherit">
                    <Typography variant="h6">{item.title}</Typography>
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

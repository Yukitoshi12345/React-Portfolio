import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

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
      <Container>
        <Toolbar>
          {menuList.map((item) => (
            <Button key={item.id} color="inherit">
              <Typography variant="h6">{item.title}</Typography>
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

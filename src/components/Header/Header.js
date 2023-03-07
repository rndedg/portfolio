import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const pages = ["About Me", "Projects", "Contact"];


function ResponsiveAppBar() {

  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#014c80" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
                maxHeight: { xs: 45, md: 100 },
                maxWidth: { xs: 45, md: 100 },
              }}
              src="https://github.com/rndedg/portfolio/blob/master/assets/logo.png?raw=true"
          alt="GL logo"
            />
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => setTimeout(() => {navigate(`/${page}`, { replace: true })}, 250)}
                sx={{ my: 2, color: "white", display: "block", marginRight: "20px", backgroundColor: "#e0e7f352" }}
              >
                {page} 
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

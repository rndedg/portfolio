import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["About Me", "Projects", "Contact"];


function ResponsiveAppBar() {


  return (
    <AppBar  sx={{ backgroundColor: "#014c80", boxShadow: "#26394D 0px 20px 15px -10px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" }
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
                onClick={() => setTimeout(() => {window.location.href=`#${page}`}, 250)}
                sx={{ my: 2, color: "white", display: "block", marginRight: "2em", backgroundColor: "#e0e7f352", marginLeft: "2em" }}
              >
                {page} 
              </Button>
            ))}
          </Box>
          <Typography
            variant="h2"
            fontFamily={'EB Garamond'}
            fontWeight={500}
            fontStyle={'italic'}
            >
              Gordon J.A. Letkeman
            </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

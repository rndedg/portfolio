import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Divider } from '@mui/material';

const drawerWidth = 170;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{backgroundColor:"#014c80"}}/>
      <List sx={{backgroundColor:"#014c80"}}>
        {['About me', 'Projects', 'Goals', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{color:"#c6e6f2"}}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    
      <Divider sx={{backgroundColor:"black"}}/>


    </div>
  );


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "7em",
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"#014c80"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography variant="h4" noWrap component="div" sx={{color:"#c6e6f2"}}>
            Gordon J.A. Letkeman
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor:"#014c80" }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, backgroundColor:"#014c80"
          }}
        >
          {drawer}
          <img className="logo" src="https://github.com/rndedg/portfolio/blob/master/assets/logo.png?raw=true" alt="GL logo" width="100%" />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, backgroundColor:"#014c80"
          }}
          open
        >
          {drawer}
          <img className="logo" src="https://github.com/rndedg/portfolio/blob/master/assets/logo.png?raw=true" alt="GL logo" width="100%" />
        </Drawer>
      </Box>
      
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
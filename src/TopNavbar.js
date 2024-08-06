import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Avatar, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { styled } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#2d2d3a',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const TopNavbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#1a1a2e' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }} onClick={toggleSidebar}>
          <img src="/assets/images/logo.png" alt="Logo" width={40} height={40} />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: '#A9A9A9' }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit"  >
          <MailOutlineIcon sx={{ color: '#A9A9A9', backgroundColor: '#2d2d3a', borderRadius: '50%', width: '18px', height: '18px', p: 1 }} />
        </IconButton>
        <IconButton color="inherit" >
          <SettingsOutlinedIcon sx={{ color: '#A9A9A9', backgroundColor: '#2d2d3a', borderRadius: '50%', width: '18px', height: '18px', p: 1 }} />
        </IconButton>
        <IconButton color="inherit" >
          <NotificationsOutlinedIcon sx={{ color: '#A9A9A9', backgroundColor: '#2d2d3a', borderRadius: '50%', width: '18px', height: '18px', p: 1 }} />
        </IconButton>
        <IconButton color="inherit" >
          <Avatar alt="Profile Picture" src="/assets/images/1.jpg" sx={{ width: 24, height: 24 }} />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;

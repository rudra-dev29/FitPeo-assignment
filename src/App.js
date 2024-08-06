import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import Dashboard from './Dashboard'; // Assuming this is your dashboard component
import { Box, styled, Toolbar, useMediaQuery } from '@mui/material';

function App() {

  const isMobile = useMediaQuery('(max-width:600px)');
  const [isSidebarOpen, setSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      backgroundColor: "#000000",
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: "70px",
      }),
    }),
  );
  return (
    <Box sx={{ display: 'flex' }}>
      <TopNavbar toggleSidebar={toggleSidebar} />
      <Sidebar open={isSidebarOpen} onClose={toggleSidebar} isMobile={isMobile} />
      <Main open={isSidebarOpen}>
        <Toolbar />
        <Dashboard />
      </Main>
    </Box>
  );
}

export default App;

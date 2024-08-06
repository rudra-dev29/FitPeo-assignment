import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemButton, Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChecklistIcon from '@mui/icons-material/Checklist';
import WalletIcon from '@mui/icons-material/Wallet';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from '@mui/system';
import { Logout } from '@mui/icons-material';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: '70px',
  backgroundColor: '#1a1a2e',
  color: '#fff',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '65px'
}));



const Sidebar = ({ open, onClose, isMobile }) => {
  return (
    <Drawer
      variant='persistent'
      open={open}
      onClose={onClose}
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          backgroundColor: '#1a1a2e',
        },
      }}
    >
      <SidebarContainer variant="permanent">

        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 0 }}>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <HomeIcon sx={{ color: '#6C63FF' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 0 }}>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <BarChartIcon sx={{ color: '#A9A9A9' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 0 }}>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <ChecklistIcon sx={{ color: '#A9A9A9' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 0 }}>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <WalletIcon sx={{ color: '#A9A9A9' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ px: 0 }}>
              <ListItemIcon sx={{ justifyContent: 'center' }}>
                <ShoppingBagIcon sx={{ color: '#A9A9A9' }} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <IconButton sx={{ mt: 'auto' }}>
          <Logout sx={{ color: '#A9A9A9' }} />
        </IconButton>
      </SidebarContainer >
    </Drawer>
  );
};

export default Sidebar;

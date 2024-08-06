import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { GpsFixed, LunchDining, RiceBowl } from '@mui/icons-material';

const Item = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const IconContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: '50%',
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function Lists() {
  const items = [
    { icon: 'target', label: 'Goals', icon: <GpsFixed sx={{ color: '#bf360c' }} />, color: '#ffab91' },
    { icon: 'fastfood', label: 'Popular Dishes', icon: <LunchDining sx={{ color: '#0097a7' }} />, color: '#80deea' },
    { icon: 'restaurant', label: 'Menus', icon: <RiceBowl sx={{ color: '#00695c' }} />, color: '#80cbc4' },
  ];

  return (
    <Paper sx={{ height: '100%', backgroundColor: '#1a1a1a', color: '#fff' }}>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((item) => (
          <Item key={item.label}>
            <ListItemButton>
              <ListItemIcon >
                <IconContainer sx={{ bgcolor: item.color }}>
                  {item.icon}
                </IconContainer>
              </ListItemIcon>
              <ListItemText primary={item.label} />
              <IconButton sx={{
                backgroundColor: '#9e9e9e',
                borderRadius: '50%',
                padding: '4px',
              }} size="small">
                <ArrowForwardIosIcon fontSize="small" sx={{ color: "#fff" }} />
              </IconButton>
            </ListItemButton>
          </Item>
        ))}
      </List>
    </Paper>
  );
}
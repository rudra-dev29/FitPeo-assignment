import * as React from 'react';
import { Box, Grid, Typography, } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function MetricsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="space-around" alignItems="center">
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: '#1a1a1a',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >

            <ShoppingCartIcon sx={{ color: '#2979ff', fontSize: '32px', bgcolor: '#81d4fa', p: 2, borderRadius: 2 }} />

            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              Total Orders
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h5" sx={{ color: '#fff' }}>
                75
              </Typography>
              <Typography variant="body1" sx={{ color: '#5cb85c', ml: 'auto', my: 'auto' }}>
                <ArrowDropUpIcon />  3%
              </Typography>
            </Box>

          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: '#1a1a1a',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <ShoppingBagIcon sx={{ color: '#4caf50', fontSize: '32px', bgcolor: '#64ffda', p: 2, borderRadius: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              Total Delivered
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5" sx={{ color: '#fff' }}>
                70
              </Typography>
              <Typography variant="body1" sx={{ color: '#d9534f' }}>
                <ArrowDropDownIcon /> 3%
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: '#1a1a1a',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <CancelIcon sx={{ color: '#f44336', fontSize: '32px', bgcolor: '#ffab91', p: 2, borderRadius: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              Total Cancelled
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5" sx={{ color: '#fff' }}>
                05
              </Typography>
              <Typography variant="body1" sx={{ color: '#5cb85c' }}>
                <ArrowDropUpIcon />  3%
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: '#1a1a1a',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <AttachMoneyIcon sx={{ color: '#e91e63', fontSize: '32px', bgcolor: '#f48fb1', p: 2, borderRadius: 2 }} />
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              Total Revenue
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h5" sx={{ color: '#fff' }}>
                $12k
              </Typography>
              <Typography variant="body1" sx={{ color: '#d9534f' }}>
                <ArrowDropDownIcon /> 3%
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
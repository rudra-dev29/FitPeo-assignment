// GaugeChart.js
import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import { Box, Typography } from '@mui/material';

const GaugeChart = () => {
  return (
    <Box>
      <Box
        sx={{
          height: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <Gauge
          data={[70]}
          cornerRadius="50%"
          value={70}
          min={0}
          max={100}
          sx={(theme) => ({

            [`& .${gaugeClasses.referenceArc}`]: {
              fill: '#1976d299',
            },
          })}

        />
        <Box sx={{
          position: 'absolute',
          textAlign: 'center',
        }}>
          <Typography
            variant="h6"
            component="div"
            color="white"

          >
            70%
          </Typography>
          <Typography
            component="div"
            color="white"
            sx={{
              px: 3,
              fontSize: '8px'
            }}
          >
            Goal Complited
          </Typography>
        </Box>

      </Box>
      <Typography variant="caption" sx={{ fontSize: '10px' }} >
        *The values here has been rounded off.
      </Typography>
    </Box>
  );
};

export default GaugeChart;

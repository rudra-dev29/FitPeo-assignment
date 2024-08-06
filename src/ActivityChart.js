import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const ActivityChart = () => {
    const [timeFrame, setTimeFrame] = useState('daily');

    const getData = () => {
        switch (timeFrame) {
            case 'daily':
                return {
                    labels: [...Array(24).keys()],
                    datasets: [120, 150, 200, 300, 350, 400, 200, 150, 100, 50, 60, 80, 100, 120, 300, 400, 500, 600, 700, 800, 600, 500, 400, 300],
                };
            case 'weekly':
                return {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [5000, 7000, 4000, 6000, 8000, 12000, 10000],
                };
            case 'yearly':
                return {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [50000, 60000, 70000, 80000, 75000, 85000, 90000, 95000, 100000, 110000, 105000, 115000],
                };
            default:
                return { labels: [], datasets: [] };
        }
    };

    const handleTimeFrameChange = (event) => {
        setTimeFrame(event.target.value);
    };

    const data = getData();

    return (
        <Paper sx={{ p: 2, backgroundColor: '#1a1a1a', color:"#fff"}}>
            <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant="h5" mb={0}>
          Activity
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', }}>
                <FormControl  sx={{ minWidth: 120,color:"#fff" }}>
                    {/* <InputLabel id="timeframe-label">Time Frame</InputLabel> */}
                    <Select
                        labelId="timeframe-label"
                        value={timeFrame}
                        onChange={handleTimeFrameChange}
                        sx={{
                            // p:'5px 20px',
                            color: 'white',
                            '.MuiSvgIcon-root': {
                                color: 'white',
                              
                            },
                            '.MuiInputBase-input': {
                                color: 'white',
                               
                            },
                            '.MuiSelect-select': {
                                backgroundColor: '#333', // Optional: dark background for dropdown
                                 borderRadius:'30px',
                                 p:'5px 20px',
                            },
                            
                        }}

                    >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                        <MenuItem value="yearly">Yearly</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </Box>
       
        <Box >
          
            <BarChart
                xAxis={[
                    {
                        scaleType:'band',
                        data: data.labels,
                        tickColor: 'white', // White color for x-axis labels
                        style: { color: 'white' }, // White color for the label text
                        // label: 'Time',
                    },
                ]}
                yAxis={[
                    {
                        // label: 'Activity',
                        tickColor: 'white', // White color for y-axis labels
                        style: { color: 'white' }, // White color for the label text
                        grid: {
                            stroke: 'rgba(255, 255, 255, 0.3)', // White grid lines with transparency
                        },
                    },
                ]}
                series={[
                    {
                        data: data.datasets,
                        // label: 'Activity',
                        color: '#3b82f6', // Custom color matching the one in the image
                    },
                ]}
                height={250}
                // borderRadius={20}
                // width={800}
                // sx={{
                //     '& .MuiChartsBar-root': {
                //         fill: '#3b82f6', // Bar color to match the screenshot
                //     },
                // }}

                // sx={{
                //     '& .MuiChartsBar-root': {
                //         fill: '#3b82f6', // Bar color
                //     },
                //     '& .MuiChartsAxis-root': {
                //         color: 'white', // Axes labels color
                //     },
                //     '& .MuiChartsLabel-root': {
                //         color: 'white', // Dataset label color
                //     },
                //     '& .MuiChartsGridLine-root': {
                //         stroke: 'rgba(255, 255, 255, 0.3)', // Grid line color with some transparency
                //     },
                // }}

                sx={(theme) => ({
                    '& .MuiChartsBar-root': {
                            fill: '#3b82f6', // Bar color
                            borderRadius: '20px', 
                            rx: '20px', 
                        },
                    [`.${axisClasses.root}`]: {
                        [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                          stroke: '#bdbdbd',
                          // strokeWidth: 3,
                        },
                        [`.${axisClasses.tickLabel}`]: {
                          fill: '#bdbdbd',
                        },
                      },
                      [`.${barElementClasses.root}`]: {      
         
                        rx: 10, 
                      },
                })}
            />
        </Box>
        </Paper>
    );
};

export default ActivityChart;

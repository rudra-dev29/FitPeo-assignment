import React from 'react';
import { Container, Box, Typography, Grid, Paper, Avatar, List, ListItem, ListItemAvatar, ListItemText, CircularProgress, Divider, Card, CardHeader, CardContent } from '@mui/material';
import { Star, ArrowDropUp } from '@mui/icons-material';
import MetricsGrid from './MetricsGrid';
import GaugeChart from './GaugeChart';
import ActivityChart from './ActivityChart';
import Lists from './Lists';
import RecentOrders from './RecentOrders';
import FeedbackCard from './FeedbackCard';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <MetricsGrid />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ height: '100%', backgroundColor: '#1a1a1a', color: '#fff' }}>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', }}>
              <Box>
                <Typography variant="h6">Net Profit</Typography>
                <Typography variant="h4" py={2}>$6759.25</Typography>
                <Typography variant="body1" sx={{ color: '#5cb85c' }}>
                  <ArrowDropUp />  3%
                </Typography>
              </Box>
              <GaugeChart />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <ActivityChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <Lists />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, backgroundColor: '#1a1a1a', color: '#fff' }}>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            <RecentOrders />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, backgroundColor: '#1a1a1a', color: '#fff' }}>
            <Typography variant="h6" gutterBottom>
              Customer's Feedback
            </Typography>
            <Box sx={{
              height: "500px", overflow: 'overlay',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
            }}>
              {['Jenny Wilson', 'Dianne Russell', 'Devon Lane'].map((name, index) => (
                <React.Fragment key={index}>

                  <Card sx={{ boxShadow: 'none', color: '#fff', backgroundColor: '#1a1a1a', borderBottom: "1px solid #9e9e9e" }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: '#333' }} aria-label="recipe" src="/static/images/avatar/1.jpg" />
                      }
                      title="Shrimp and Chorizo Paella"
                      sx={{ pb: 0 }}

                    />
                    <CardContent sx={{ pt: 0 }}>
                      <Box style={{ display: 'flex', alignItems: 'center' }}>
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <Star key={index} sx={{ color: '#ffff00' }} />
                        ))}
                      </Box>
                      <Typography variant="body2" color="#fff">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                  {index < 2 && <Divider />}
                </React.Fragment>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

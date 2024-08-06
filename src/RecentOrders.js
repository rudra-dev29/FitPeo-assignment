import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { green, red, orange } from '@mui/material/colors';

const rows = [
  {
    customer: 'Wade Warren',
    orderNo: '15478256',
    amount: '$124.00',
    status: 'Delivered',
    avatar: '/images/wade.jpg',
  },
  {
    customer: 'Jane Cooper',
    orderNo: '48965786',
    amount: '$365.02',
    status: 'Delivered',
    avatar: '/images/jane.jpg',
  },
  {
    customer: 'Guy Hawkins',
    orderNo: '78958215',
    amount: '$45.88',
    status: 'Cancelled',
    avatar: '/images/guy.jpg',
  },
  {
    customer: 'Kristin Watson',
    orderNo: '20965732',
    amount: '$65.00',
    status: 'Pending',
    avatar: '/images/kristin.jpg',
  },
  {
    customer: 'Cody Fisher',
    orderNo: '95715620',
    amount: '$545.00',
    status: 'Delivered',
    avatar: '/images/cody.jpg',
  },
  {
    customer: 'Savannah Nguyen',
    orderNo: '78514568',
    amount: '$128.20',
    status: 'Delivered',
    avatar: '/images/savannah.jpg',
  },
];

export default function RecentOrders() {
  return (
    <TableContainer component={Paper} sx={{
      backgroundColor: '#1a1a1a', color: '#fff', height: "500px", overflow: 'overlay',
      '&::-webkit-scrollbar': {
        display: 'none', // For Chrome, Safari, and Opera
      },
      '-ms-overflow-style': 'none', // For Internet Explorer and Edge
      'scrollbar-width': 'none',
    }}>
      <Table sx={{ minWidth: 650, color: "#fff" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>Customer</TableCell>
            <TableCell align="right" sx={{ color: 'white' }}>Order No.</TableCell>
            <TableCell align="right" sx={{ color: 'white' }}>Amount</TableCell>
            <TableCell align="right" sx={{ color: 'white' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.customer}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"
                sx={{
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Avatar alt={row.customer} src={row.avatar} />

                {row.customer}
              </TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>{row.orderNo}</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>{row.amount}</TableCell>
              <TableCell align="right" sx={{ color: 'white' }}>
                <span
                  style={{
                    backgroundColor:
                      row.status === 'Delivered'
                        ? green[500]
                        : row.status === 'Pending'
                          ? orange[500]
                          : red[500],
                    padding: '5px 10px',
                    borderRadius: '5px',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
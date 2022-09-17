import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 222401,
            product: "ASUS ROG Strix",
            img: "https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-15-e510ma/vivobook-15-e510ma-0101-500x500.jpg",
            customer: "Muhammad Sujon",
            date: "01 March",
            amount: 2000,
            method: "Online",
            status: "Pending"
        },
        {
            id: 222401,
            product: "ASUS ROG Strix",
            img: "https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-15-e510ma/vivobook-15-e510ma-0101-500x500.jpg",
            customer: "Md Akash",
            date: "01 March",
            amount: 2000,
            method: "Online",
            status: "Approved"
        },
        {
            id: 222401,
            product: "ASUS ROG Strix",
            img: "https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-15-e510ma/vivobook-15-e510ma-0101-500x500.jpg",
            customer: "Al Mahmud Sujon",
            date: "01 June",
            amount: 2000,
            method: "Online",
            status: "Pending"
        },
        {
            id: 222401,
            product: "ASUS ROG Strix",
            img: "https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-15-e510ma/vivobook-15-e510ma-0101-500x500.jpg",
            customer: "Muhammad Sujon",
            date: "01 April",
            amount: 2000,
            method: "Online",
            status: "Approved"
        },
    ]

    return (
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='tableCell' >Tracking ID</TableCell>
              <TableCell className='tableCell' >Product</TableCell>
              <TableCell className='tableCell' >Customer</TableCell>
              <TableCell className='tableCell' >Date</TableCell>
              <TableCell className='tableCell' >Amount</TableCell>
              <TableCell className='tableCell' >Payment Method</TableCell>
              <TableCell className='tableCell' >Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell className='tableCell' component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell  className='tableCell' component="th" scope="row">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell  className='tableCell' component="th" scope="row">
                  {row.customer}
                </TableCell>
                <TableCell  className='tableCell' component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell  className='tableCell' component="th" scope="row">
                  {row.amount}
                </TableCell>
                <TableCell  className='tableCell' component="th" scope="row">
                  {row.method}
                </TableCell>
                <TableCell  className='tableCell' component="th" scope="row">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default List;
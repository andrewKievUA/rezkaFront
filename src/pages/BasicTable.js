import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function BasicTable({data}) {
  if (data){
  const dataSorted= data.sort((a, b)=> {

    let a1 = a.time.split(':')
    //console.log(a1)
    a1 = (+a1[0]) * 60 * 60 + (+a1[1]) * 60 


    let b1 = b.time.split(':')
    b1 = (+b1[0]) * 60 * 60 + (+b1[1]) * 60 
    //console.log(a1,b1)

    if (  a1 < b1) {
      return 1;
    }
    if (a1  > b1) {
      return -1;
    }
  })  

 console.log(dataSorted,"dataSorted")
 // console.log(data,"from element")

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 333 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Время</TableCell>
            <TableCell align="right">перед Верх</TableCell>
            <TableCell align="right">перед Низ</TableCell>
            <TableCell align="right">зад Верх</TableCell>
            <TableCell align="right">зад Низ</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>

          {dataSorted? dataSorted.map((row) => (
            <TableRow
              key={row.time}
             
            >
              <TableCell align="right" >{row.time}</TableCell>
              <TableCell align="right">{row.val1}</TableCell>
              <TableCell align="right">{row.val2}</TableCell>
              <TableCell align="right">{row.val3}</TableCell>
              <TableCell align="right">{row.val4}</TableCell>
            </TableRow>
          )):null}


        </TableBody>
      </Table>
    </TableContainer>
  );
}
}
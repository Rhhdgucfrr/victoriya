import React from "react";
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';


function MyCell({children,value}) {
    return (
        <TableCell component="th" scope="row" >
           <div style={{ display: 'flex',alignItems:'center' }}>
           
            <Typography >
                    {value}
            </Typography>     
            {children}
            </div>      
        </TableCell>
    )
}


export default MyCell
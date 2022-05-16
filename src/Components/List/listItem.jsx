import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { useState, useContext } from "react";
import classes from './listItem.module.css';
import ListItemDetails from './listItemsDetails';
import Typography from '@mui/material/Typography';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';

import LongMenu from "../../Components/Menu/Menu";
import State from './State';
import MyCell from './Cell';

function ListItems({children,user}) {

    const [open, setOpen] = useState(false);
    return (
        <React.Fragment >
            <TableRow className={classes.ssss}  >
                {children}
                <MyCell >
                    <IconButton
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </MyCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box >
                            <ListItemDetails users={user}/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
export default ListItems
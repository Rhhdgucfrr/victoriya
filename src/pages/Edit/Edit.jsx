import React, { useContext, useEffect, useMemo, useState } from "react";
import classes from './Edit.module.css'
import EditUser from './EditUser'

import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SnakcBar from "../../UI/Snakcbar";






function Edit() {


    const [activeSnak, setActive] = useState(false);


    function handleChange() {
        setActive(!activeSnak)
    }

    const params = useParams();
    return (


        <div className={classes.content}>
            <div className={classes.left}>
                <Typography variant="button" > Go to work schedule</Typography>
                <IconButton onClick={event => setActive(true)} >
                    <KeyboardArrowLeftIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </div>
            <div>
                <EditUser value={params.id} />
                <SnakcBar isOpen={activeSnak} type='error' message='Аn unexpected error occurred' onChange={handleChange} />
            </div>
            <div className={classes.right}>
                <Typography variant="button" > Go to notification</Typography>
                <IconButton onClick={event => setActive(true)} >
                    <ChevronRightIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </div>
        </div>
    )
}


export default Edit
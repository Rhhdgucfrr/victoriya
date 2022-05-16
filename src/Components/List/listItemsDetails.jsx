
import React from "react"
import classes from './listItem.module.css'
import Typography from '@mui/material/Typography';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';

 function ListItemDetails({users})
{
    return(
        <div className={classes.accordionDetails}>

        
        <Typography variant="h5" gutterBottom component="div"  style={{paddingTop:'20px'}}>{users.value}</Typography>
        <Typography variant="body2">{users.role}</Typography>
        <div style={{display:'flex' , alignContent: 'center', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center',paddingTop:'10px'}}>
            <EmailSharpIcon style={{ color: '#707070',margin:'10px'}}/>
            <div style={{display:'flex',flexDirection: 'column'}}>
               
                <Typography variant="body2" component="h2">Email adress</Typography>
                <Typography variant="body1" component="h2">{users.mail}</Typography>
         </div>
        </div>
        <div className={classes.detailContent}>
        <Typography variant="body2">State</Typography>
        <Typography variant="body1">{users.state}</Typography>
        </div>
        <div className={classes.detailContent}>
        <Typography variant="body2">Telephone Numder</Typography>
        <Typography variant="body1">{users.telephone}</Typography>
        </div>
        <Typography variant="h5" gutterBottom component="div" style={{marginTop:'20px'}}>Organiztion</Typography>
        <div className={classes.detailContent}>
        <Typography variant="body2">Organization</Typography>
        <Typography variant="body1">{users.organization}</Typography>
        </div>
        <div className={classes.detailContent}>
        <Typography variant="body2">Position</Typography>
        <Typography variant="body1">{users.position}</Typography>
        </div>     
    </div>
    )
}
export default ListItemDetails
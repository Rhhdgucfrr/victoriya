import React, { useContext, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


function CustomInput({ plaseholder, title , value,object,setValue,variant}) {


    useEffect(()=>{

        if (object[value]==undefined){
            setValue({...object,[value]:''})            
        }
    },[object])
   
  
  
    function handleChange(event){
       
        setValue({...object,[value]:event.target.value})
    }

    return (
        <div style={{display:"flex",   flexDirection: 'column'}}>                 
            <Typography variant="h7" component="div">{title}</Typography>
            <div  style={{paddingBottom:'10px',paddingRight:'20px',paddingTop:'10px'}}>
            <TextField style={{ width: '300px' }}
                id="standard-textarea"
                label={plaseholder}
                placeholder={plaseholder}
                multiline
                variant={variant}
                value={object[value]}
                onChange={handleChange} ></TextField>            
              </div>          
        </div >
    )
}


export default CustomInput
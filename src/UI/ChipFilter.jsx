import  React, {MouseEvent, useContext, useState} from 'react'; 
import LanguageIcon from '@mui/icons-material/Language';
import {Chip} from "@material-ui/core";
import { UsersContext } from '../context/UsersContext';





function ChipFilter({filter ,...props}){  

 
  const filters= useContext(UsersContext)  
  return (    
    <div style={{margin:'5px'}}>    
        <Chip variant="outlined" label={filter.value}  onDelete={()=>filters.removeFilter(filter.value)} {...props}/>      
    </div>
        
    
  );
}
export default ChipFilter
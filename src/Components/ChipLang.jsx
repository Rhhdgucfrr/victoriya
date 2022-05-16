import  React, {MouseEvent, useState} from 'react'; 
import LanguageIcon from '@mui/icons-material/Language';
import {Chip} from "@material-ui/core";



function ChipLang(){


  const [state,setState]= useState('Русский')

  function ChangeValue()
  {
    if(state=='Русский')
    setState('English')
    else
    setState('Русский')
  }

  return (
    <div style={{padding:'3rem'}}>
        <Chip icon={<LanguageIcon/>} label={state} onClick={ChangeValue}/>    
    </div>
  );
}
export default ChipLang
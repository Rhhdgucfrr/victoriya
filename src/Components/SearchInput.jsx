import React from "react";
import classes from './SerchInput.module.css'


 
function SearchInput(props)
{  
      return(
      <div style={{ display:'flex',alignItems:'center',width:'52%',flexDirection:'row',marginLeft:'290px'}}>
        <input className={classes.input} {...props} />
      </div>
    )
}

export default SearchInput;
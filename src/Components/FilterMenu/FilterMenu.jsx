import React from "react";
import IconButton from '@mui/material/IconButton';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

function FilterMenu({changeState}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
   

    return (
        <div>
            <IconButton toltip='dfd'                
             
                onClick={changeState}
            >
                <MenuTwoToneIcon style={{color:'white',fontSize: '30'}} />
            </IconButton>

        
          
        </div>
    )
}
export default FilterMenu
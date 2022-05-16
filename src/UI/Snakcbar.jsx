import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

 function SnakcBar({isOpen,type,message,onChange}) {

 

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>    
      <Snackbar open={isOpen} autoHideDuration={6000} >
        <Alert  severity={type} sx={{ width: '100%' }} onClose={onChange} >
          {message}
        </Alert>
      </Snackbar>      
     
      
    </Stack>
  );
}
export default SnakcBar
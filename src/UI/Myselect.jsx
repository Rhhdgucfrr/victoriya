import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';



function Myselect({ values, label, title, setValue, object, value, addValue ,props}) {

    const [valueSelect, setValueSelect] = React.useState(object[value])

   
    React.useEffect(() => {
        try {
            if (valueSelect !== '') { 
                addValue()
            }
        }
        catch { }
        //setValue({ ...object, [value]:valueSelect })
    }, [valueSelect])


    const handleChange = (event) => {
        setValueSelect(event.target.value)       
        try{
        setValue({ ...object, [value]: event.target.value })
        }
        catch{}
    };

    return (
        <div >            
            <Typography variant="h7" component="div">{title}</Typography>
            <FormControl sx={{ m: 1}} style={{width:'300px'}}>
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    value={valueSelect}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label={label} />}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    {values.map((value) => (
                        <MenuItem
                            key={value.value}
                            value={value.value}
                        >
                            {value.value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
export default Myselect
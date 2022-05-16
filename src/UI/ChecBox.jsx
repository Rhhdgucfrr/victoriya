import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { UsersContext } from '../context/UsersContext';

function CheckBox({ values, object, value, removeValue }) {

    const func = React.useContext(UsersContext)
    const setSearch = func.setSearchText
    const add = func.addFilter


    const [checkvalue, setValue] = React.useState('')
    const [checked, setChecked] = React.useState(false)


    React.useEffect(() => {
        if (checkvalue !== '' && checked == true) {
            add()
        }
        else
            try {
                { removeValue(checkvalue) }
            }
            catch { }
    }, [checked, checkvalue])



    function setStatevalue(event) {

        if (event.target.checked == true) {
            setChecked(true)
        }
        setValue(event.target.value)
        setSearch({ ...object, [value]: event.target.value })
        if (event.target.checked == false) {
            setChecked(false)
        }
    }

    return (
        <FormGroup>

            {values.map((valuee) =>
                <FormControlLabel control={<Checkbox onChange={setStatevalue} value={valuee.value} />}

                    label={valuee.value}
                    key={valuee.value} />)}
        </FormGroup>
    );
}
export default CheckBox 
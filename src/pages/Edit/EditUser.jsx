import React, { useContext, useEffect, useState } from "react";
import Myselect from "../../UI/Myselect";
import CustomInput from "../../UI/CustomInput";
import Role from "../../data/Role";
import Location from "../../data/Location";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import classes from './Edit.module.css'
import CheckBox from "../../UI/ChecBox";
import { UsersContext } from "../../context/UsersContext";
import { useParams } from "react-router-dom";
import SnakcBar from "../../UI/Snakcbar";

function EditUser(){

    const users=useContext(UsersContext)

    const ss=useParams()
 
    useEffect(()=>{
         users.setUser(users.Users.find(x=>x.id==ss.id))       
    },[])
   
   
    function changeUsers(changeUser){
        users.setUsers(users.Users.map(user=>{
            if(user.id==ss.id){return changeUser }
            else return user
        }))      
        setOpenSnak();
    }
    function inv(){changeUsers(users.user)}
   

    const[isopenSnak,setIsOpenSnak]=useState(false);


    function setOpenSnak(){
        setIsOpenSnak(!isopenSnak)
    }

    

    return(
        <div className={classes.container}>
                <div className={classes.title}>
                    <Typography variant="h4" component="div" style={{ paddingTop: '20px', paddingBottom: '20px' }}> General information</Typography>
                    <Button onClick={inv}
                    variant="contained" 
                    style={{borderRadius:'30px',width:'100px'}} > Save</Button>
                </div>

                <div className={classes.Information}>
                    <Myselect 
                    values={Role} 
                    label='role' 
                    title='Role' 
                    value='role'
                    object={users.user}
                    setValue={users.setUser} 
                   />
                    <Myselect
                      values={Location} 
                      label='location'
                      title='Location' 
                      value='location'
                      object={users.user}
                      setValue={users.setUser} 
                     />
                    <CustomInput
                        variant='outlined'
                        plaseholder="position"
                        title='Position'
                        value='position'
                        object={users.user}
                        setValue={users.setUser} />
                    <CustomInput
                        variant='outlined'
                        plaseholder="organization"
                        title='Organization'
                        value='organization'
                        object={users.user}
                        setValue={users.setUser}  />
                </div>
                <Typography variant="h4" component="div" style={{ paddingTop: '20px', paddingBottom: '20px' }}>Personal information</Typography>
                <div className={classes.Information}>
                    <CustomInput
                        variant='outlined'
                        plaseholder="Full name"
                        title='Full name'
                        value='value'
                        object={users.user}
                        setValue={users.setUser}  />
                    <CustomInput
                        variant='outlined'
                        plaseholder="example@mail.com"
                        title='Email adress'
                        value='mail'
                        object={users.user}
                        setValue={users.setUser}  />
                    <CustomInput
                        variant='outlined'
                        plaseholder="telephone"
                        title='Telephone number'
                        value='telephone'
                        object={users.user}
                        setValue={users.setUser} />
                    
                    <CheckBox values={[{id:1,value:'change password on next login'}]}/>
                    <SnakcBar isOpen={isopenSnak} onChange={setOpenSnak} type='success' message='User data changed successfully'/>
                </div>
            </div>
    )
}

export default EditUser
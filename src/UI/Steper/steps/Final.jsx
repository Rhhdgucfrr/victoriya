import React, { useContext } from "react";
import ListItems from "../../../Components/List/listItem";
import { UsersContext } from "../../../context/UsersContext";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import MyCell from "../../../Components/List/Cell";
import State from "../../../Components/List/State";
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';



function Final({ message, setValue }) {


  const user = useContext(UsersContext)


  function fff() {
    setValue()
  }

  return (

    <div className="flex flex-col items-left">

      <div className="mt-3 text-xl font-semibold uppercase text-green-500">
        {message.title}
      </div>
      <div className="text-lg font-semibold text-gray-500 mb-10">
        {message.body}
      </div>

      <ListItems user={user.user}>
        <MyCell>
          <PersonOutlineSharpIcon style={{ color: '#707070'}} />
        </MyCell>
        <MyCell value={user.user.value}>         
        </MyCell>
        <MyCell>
          <State stateText={user.user.state} />
        </MyCell>
        <MyCell >
          <EmailSharpIcon style={{ color: '#707070' }} />
        </MyCell>
        <MyCell value={user.user.mail}>
         
        </MyCell>
        <MyCell value={user.user.location} />
        <MyCell value={user.user.role} />
       
              
      </ListItems>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <Button variant="contained" color="success" style={{ marginRight: '5px' }} onClick={fff} component={Link} to='/users'>
          {message.buttonText}
        </Button>
        <Button variant="outlined" color="error" style={{ marginLeft: '5px' }} component={Link} to='/users'>
          Cancle
        </Button>

      </div>
    </div>

  );
}
export default Final

import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Avatar, Chip
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import Routes from "./routes/Routes";
import useAuth from "./hooks/useAuth";
import { useState } from "react";
import { UsersContext } from "./context/UsersContext";
import FilterMenu from "./Components/FilterMenu/FilterMenu";
import SearchInput from "./Components/SearchInput";
import stringAvatar from "./data/Avatar";
import SnakcBar from "./UI/Snakcbar";
import PositionedMenu from "./UI/PositionedMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 3,
    display: 'flex',
  },
  title: {
    marginRight: theme.spacing(2),
  },
}));

function App(props) {
  const classes = useStyles();
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate("/login");
  };


  function handleClick() {

  }
  const [Users, setUsers] = useState([
    { id: 1, value: '1', state: 'Registered', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 2, value: '2', state: 'New', mail: 'rhhdgucf@gmail.com', location: 'ОСИС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 3, value: '3', state: 'Deleted', mail: 'rhhdgucf@gmail.com', location: 'ОСАС', role: 'пользователь', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 4, value: '4 ', state: 'Active', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор' },
    { id: 5, value: '5', state: 'Registered', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 6, value: '6', state: 'New', mail: 'rhhdgucf@gmail.com', location: 'ОСИС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 7, value: '7', state: 'Deleted', mail: 'rhhdgucf@gmail.com', location: 'ОСАС', role: 'пользователь', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 8, value: '8 ', state: 'Active', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор' },
    { id: 9, value: '9', state: 'Registered', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 10, value: '10', state: 'New', mail: 'rhhdgucf@gmail.com', location: 'ОСИС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 11, value: 'Федоренко Николай', state: 'Deleted', mail: 'rhhdgucf@gmail.com', location: 'ОСАС', role: 'пользователь', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 12, value: 'Горбачев Кирилл ', state: 'Active', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор' },
    { id: 13, value: 'Горбачев Кирилл', state: 'Registered', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 14, value: 'Иванов Иван', state: 'New', mail: 'rhhdgucf@gmail.com', location: 'ОСИС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 15, value: 'Федоренко Николай', state: 'Deleted', mail: 'rhhdgucf@gmail.com', location: 'ОСАС', role: 'пользователь', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 16, value: 'Горбачев Кирилл ', state: 'Active', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор' },
    { id: 17, value: 'Горбачев Кирилл', state: 'Registered', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 18, value: 'Иванов Иван', state: 'New', mail: 'rhhdgucf@gmail.com', location: 'ОСИС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 19, value: 'Федоренко Николай', state: 'Deleted', mail: 'rhhdgucf@gmail.com', location: 'ОСАС', role: 'пользователь', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 20, value: 'Горбачев Кирилл ', state: 'Active', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор' },
    { id: 21, value: '21', state: 'Registered', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 22, value: 'Иванов Иван', state: 'New', mail: 'rhhdgucf@gmail.com', location: 'ОСИС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 23, value: 'Федоренко Николай', state: 'Deleted', mail: 'rhhdgucf@gmail.com', location: 'ОСАС', role: 'пользователь', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 24, value: 'Горбачев Кирилл ', state: 'Active', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор' },
    { id: 25, value: 'Горбачев Кирилл', state: 'Registered', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 26, value: 'Иванов Иван', state: 'New', mail: 'rhhdgucf@gmail.com', location: 'ОСИС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 27, value: 'Федоренко Николай', state: 'Deleted', mail: 'rhhdgucf@gmail.com', location: 'ОСАС', role: 'пользователь', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 28, value: 'Горбачев Кирилл ', state: 'Active', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор' },
    { id: 29, value: 'Горбачев Кирилл', state: 'Registered', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 30, value: 'Иванов Иван', state: 'New', mail: 'rhhdgucf@gmail.com', location: 'ОСИС', role: 'администратор', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 31, value: 'Федоренко Николай', state: 'Deleted', mail: 'rhhdgucf@gmail.com', location: 'ОСАС', role: 'пользователь', telephone: '+375291376050', organization: 'cotvec', position: 'omis' },
    { id: 32, value: 'Горбачев Кирилл ', state: 'Active', mail: 'rhhdgucf@gmail.com', location: 'ОСЦС', role: 'администратор' },
  ])


  const [user, setUser] = useState({ value: '', state: 'registered', mail: '', role: '', location: '', telephone: '', organization: '' })

  function addUsers(event) {
    const userNew = { ...user, id: Date.now() }
    setUsers([...Users, userNew])
    setUser({ value: '', state: 'registered', mail: '', role: '', location: '', telephone: '', organization: '' })
  }
  const [filters, setFilter] = useState([
    { id: 1, value: 'администратор' },
  ])


  const [value, setSearchText] = useState({ value: '' })

  function search(Users, keys) {
    if (filters.length !== 0) {
      let newMass = {}
      {
        filters.map((filter) =>
          newMass = Users.filter((User) => keys.some((key) => User[key].toLowerCase().includes(filter.value.toLowerCase())))
        )
      }
      return newMass
    }
    else {
      return Users
    }
  }

  function addFilter(event) {

    if (filters.length >= 7) { console.log(filters.length) }
    else {
      const newfilter = {
        ...value,
        id: Date.now()
      }
      setSearchText({ value: '' })
      setFilter([...filters, newfilter])
    }
  }


  function removeFilter(value) {
    setFilter(filters.filter(f => f.value !== value))
  }

  const [isOpenedFilterMenu, setIsOpenedFilterMenu] = useState(false)

  function changeStateFilterMenu() {

    setIsOpenedFilterMenu(wasOpened => !wasOpened)
  }

  const values = {

    removeFilter, setSearchText, filters, value, addFilter,
    search,
    user, setUser,
    Users, setUsers,
    addUsers,
    isOpenedFilterMenu
  }


  function handlekeypress(event) {
    if (event.key === 'Enter') {
      <SnakcBar isOpen={true} />
      addFilter();

    }
  }


  const options=[
   
    {id:1,value:'Alert rules reference', path:'/ruls'},
    {id:2,value:'Problem directory', path:'/dashboard'},
    {id:3,value:'Directory of current problems', path:'/problems_description'},
    {id:4,value:'History of current problems', path:'/history'},
    {id:5,value:'Users' , path:'/users' },
    {id:6,value:'Notification channels', path:'/channels'},
    {id:7,value:'Telegram dirrection', path:'/telegram'},
   
]




  return (
    <UsersContext.Provider value={values}>
      <div className={classes.root} style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%' }}>
        {auth.isLoaded &&
          (auth.user ? (
            <>
              <AppBar position="static">

                <Toolbar style={{display:'flex'}}>
                  <FilterMenu changeState={changeStateFilterMenu} />

                  <Typography variant="button"  className={classes.title} style={{marginLeft:'35px'}}>
                    VICTORIYA
                  </Typography>
                  <div className={classes.rightToolbar}>
                             
                      <PositionedMenu options={options}/>             
                  
                  </div>
                  <SearchInput onChange={event => setSearchText({ value, value: event.target.value })} onKeyPress={handlekeypress} placeholder="Search on users..." />
                  <div className={classes.leftToolbar}>
                    <Chip avatar={
                      <Avatar {...stringAvatar(auth.user.firstName + ' ' + auth.user.lastName)}
                      />}
                      label={auth.user.firstName}
                      onClick={handleClick}
                      component={Link} to="/profile" />
                    <Button color="inherit" onClick={onLogOut}>
                      Log out
                    </Button>
                  </div>
                </Toolbar>
              </AppBar>
            </>
          ) : (<></>)

          )}

        <Routes />
      </div>
    </UsersContext.Provider>
  );
}

export default App;

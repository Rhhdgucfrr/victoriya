
import React,{ useState,Button} from "react";
import {Redirect,useParams,useLocation,Link} from 'react-router-dom';
import classes from './subjects.module.css'
import ChipFilter from "../../UI/ChipFilter";
import SearchInput from "../../Components/SearchInput";
import Subject from "../../Components/ListItem/Subject";
import SpeedDial from "../../Components/SpeedDial";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';



function ListObjects(props)
{
    const {type}=useParams()
    console.log(type);


    const [subjects,setSubjects]=useState([
        {id:1,name:'Informatics',teacher:[
            { id:1, value:'Горбачев Кирилл Олегович'},
            { id:2, value:'Иванютенко Кирилл'}],
        priority:'low',DateStart:'01:05:2022',class:[{
            value:'7a'},
            {value:'8a'}       
        ],
        Direction:"The final test must pass it together", location: "(505-2*)"},
        {id:1,name:'Mathematic',teacher:[
            { id:1, value:'Горбачев Кирилл Олегович'},
            { id:2, value:'Иванютенко Кирилл'}],
        priority:'low',DateStart:'01:05:2022',class:[{
            id:1,value:'7a'},
            {id:2,value:'8a'}       
        ],
       
        Direction:"The final test must pass it together", location: "(505-2*)"}
       
        
    ])
  
    const [filters,setFilter]=useState([
       { id:1,value:'Инфа'},
       { id:2,value:'Инфjhvfnbrf'}
    ])  
    const [value,setSearchText]=useState('')



    function addFilter(event){
       
         const newfilter ={
            id:Date.now(),
            value
            }
        
        console.log(newfilter)
        setFilter([...filters,newfilter])      
        setSearchText('')
    }


    function removeFilter(filter)
    {
        setFilter(filters.filter(f=>f.id !== filter.id))

    }

    return(
        <div className={classes.content}  >


           
            
           
            <div className={classes.content1}>
                {filters.map((filter) =>
                    <ChipFilter filter={filter} key={filter.id} remove={removeFilter} onChange={addFilter}/>
                )}
                
            </div >
            <div className={classes.content1} style={{  justifyContent: 'center'   }}>
                <Subject subjects={subjects}></Subject>
            </div>
            <SpeedDial/>

                  
        </div>
    )
}

export default ListObjects
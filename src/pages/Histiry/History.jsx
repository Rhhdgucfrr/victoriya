import React, { useContext, useEffect, useMemo, useState } from "react";
import classes from './subjects.module.css'
import ChipFilter from "../../UI/ChipFilter";
import SpeedDial from "../../Components/SpeedDial";
import MenuItem from "../../Components/FilterMenu/MenuItem";
import { UsersContext } from '../../context/UsersContext';
import CheckBox from "../../UI/ChecBox";
import Myselect from "../../UI/Myselect";
import Priority from "../../data/problems/Priority";
import State from "../../data/rules/State";
import CountNotify from "../../data/rules/CountNotify";
import People from "../../data/rules/People";
import Days from "../../data/rules/Days";
import SnakcBar from "../../UI/Snakcbar";
import DateTime from "../../UI/DateTime";
import PagginationCustom from "../../UI/PagginationCustom";
import Plug from '../../UI/Plug';

function History(){


    const filter = useContext(UsersContext)
    const filterSost =
        [
         
        ]
    const filters = React.useContext(UsersContext);

    const [activeSnak, setActive] = useState(false)



    useMemo(() => {
        if (filter.filters.length >= 7) { setActive(true) }
        else {
            setActive(false)
        }
    }, [filter.filters])

    const keys = ['value', 'state', 'mail', 'role', 'location']



    const [page, setPage] = useState(0)
    const [rowsPerPage] = useState(10)
    const [lastIndex, setLastIndex] = useState(0);

    useEffect(() => {


        setLastIndex((page + 1) * rowsPerPage)


    }, [page])

    const firstIndex = lastIndex - rowsPerPage;
    const currentUsers = filter.search(filter.Users, keys).slice(firstIndex, lastIndex)
    function paginate(page) {
        setPage(page)
    }
    return(
        <div className={classes.content} >

            <div className={classes.contentLeft}>
                {<MenuItem isOpened={filters.isOpenedFilterMenu} sostavFilter={filterSost} />}
            </div>
            <div className={classes.contentRight}>
                <div className={classes.content1}>
                    <div className={classes.content2}>
                       
                    </div>
                   
                </div >
                <Plug title={'History problem not found'} message={'Wrong route. No option selected to\n search for problem history. example: /dashboard /:{id }/:{rule}/history'} />
                
            </div>
            <div className={classes.bottombtc}>
                <SnakcBar isOpen={activeSnak} type='warning' message='Number of filters exceeded' />              
            </div>
        </div>
    )

    
}

export default History
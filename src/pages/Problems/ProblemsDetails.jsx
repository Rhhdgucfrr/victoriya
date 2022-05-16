import React, { useContext, useEffect, useMemo, useState } from "react";
import classes from './subjects.module.css'
import MenuItem from "../../Components/FilterMenu/MenuItem";
import { UsersContext } from '../../context/UsersContext';
import CheckBox from "../../UI/ChecBox";
import Myselect from "../../UI/Myselect";
import Priority from "../../data/problems/Priority";
import CountNotify from "../../data/rules/CountNotify";
import People from "../../data/rules/People";
import Days from "../../data/rules/Days";
import SnakcBar from "../../UI/Snakcbar";
import PagginationCustom from "../../UI/PagginationCustom";
import Plug from '../../UI/Plug';

function ProblemsDetails(){

    const filter = useContext(UsersContext)
    const filterSost =
        [
            {
                id: 7, component: CheckBox, sost: CountNotify, object: filter.value, value: 'value', title: 'Include users', removeValue: filter.removeFilter
            },           
            {
                id: 2, component: Myselect, sost: Days, object: filter.value, value: 'value', title: 'Notification', removeValue: filter.removeFilter
            },
          
            
            {
                id: 3, component: CheckBox, sost: Priority, object: filter.value, value: 'value', title: 'Priority', removeValue: filter.removeFilter
            },
            {
                id: 4, component: CheckBox, sost: People, object: filter.value, value: 'value', title: 'Include users', removeValue: filter.removeFilter
            },
          
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
                    <div >
                        <PagginationCustom page={page} perPage={rowsPerPage} count={filter.search(filter.Users, keys).length} paginate={paginate} />
                    </div>
                </div >
                <Plug title={'Problems description not found'} message={'Were sorry, something went wrong'} />                
            </div>
            <div className={classes.bottombtc}>
                <SnakcBar isOpen={activeSnak} type='warning' message='Number of filters exceeded' />              
            </div>
        </div>
    )

    
}

export default ProblemsDetails
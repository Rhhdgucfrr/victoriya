
import React, { useContext, useEffect, useMemo, useState } from "react";
import classes from './subjects.module.css'
import ChipFilter from "../../UI/ChipFilter";
import SpeedDial from "../../Components/SpeedDial";
import CollapsibleTable from "../../Components/List/List";
import MenuItem from "../../Components/FilterMenu/MenuItem";
import { UsersContext } from '../../context/UsersContext';
import CheckBox from "../../UI/ChecBox";
import Myselect from "../../UI/Myselect";
import Role from "../../data/Role";
import UserState from "../../data/UserState";
import Location from "../../data/Location";
import SnakcBar from "../../UI/Snakcbar";
import PagginationCustom from "../../UI/PagginationCustom";

function Users() {


    const filter = useContext(UsersContext)
    const filterSost =
        [
            {
                id: 2, component: CheckBox, sost: Role, object: filter.value, value: 'value', title: 'Role', removeValue: filter.removeFilter
            },
            {
                id: 3, component: Myselect, sost: Location, object: filter.value, value: 'value', title: 'Location', label: 'location', setValue: filter.setSearchText, addValue: filter.addFilter
            },
            {
                id: 1, component: CheckBox, sost: UserState, object: filter.value, value: 'value', title: 'State', removeValue: filter.removeFilter
            }
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


    return (
        <div className={classes.content} >

            <div className={classes.contentLeft}>
                {<MenuItem isOpened={filters.isOpenedFilterMenu} sostavFilter={filterSost} />}
            </div>
            <div className={classes.contentRight}>
                <div className={classes.content1}>
                    <div className={classes.content2}>
                        {filters.filters.map((filter) =>
                            <ChipFilter filter={filter} key={filter.id} remove={filter.removeFilter} />
                        )}
                    </div>
                    <div >
                        <PagginationCustom page={page} perPage={rowsPerPage} count={filter.search(filter.Users, keys).length} paginate={paginate} />
                    </div>
                </div >

                <div className={classes.content1}>
                    <CollapsibleTable objects={currentUsers} />
                </div>
            </div>
            <div className={classes.bottombtc}>
                <SnakcBar isOpen={activeSnak} type='warning' message='Number of filters exceeded' />
                <SpeedDial />
            </div>
        </div>
    )
}

export default Users
import React from "react";
import classes from './listItem.module.css';



function State({ stateText }) {

    const stateClassses = [classes.state]

    if (stateText == 'Registered') {
        stateClassses.push(classes.silver)
    }
    else {
        if (stateText == 'New') { stateClassses.push(classes.blue) }
        else {
            if (stateText == 'Deleted') { stateClassses.push(classes.red) }

        }


    }


    return (
        <div className={stateClassses.join(' ')} style={{marginLeft:'20px'}}>
            <b>{stateText}</b>
        </div>
    )

}
export default State
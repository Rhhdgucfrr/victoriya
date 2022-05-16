import React, { useContext } from "react";
import classes from './Create.module.css'
import CustomInput from "../../UI/CustomInput";
import AddComponentForm from "../../Components/AddForm/AddComponentForm";
import { UsersContext } from "../../context/UsersContext";
import Account from "../../UI/Steper/steps/Account";
import Final from "../../UI/Steper/steps/Final";
import Role from "../../data/Role";
import Location from "../../data/Location";
import Myselect from "../../UI/Myselect";


function Create() {

    const user = useContext(UsersContext)

    const components = [
        { id: 1, component: CustomInput, title: 'Fullname', placholder: 'фио', value: "value", object: user.user, func: user.setUser },
        { id: 2, component: CustomInput, title: 'Email', placholder: 'mail', value: 'mail', object: user.user, func: user.setUser },
        { id: 3, component: CustomInput, title: 'Telephone number', placholder: 'telephone', value: 'telephone', object: user.user, func: user.setUser },
        { id: 4, component: CustomInput, title: 'Organization name', placholder: 'organization', value: 'organization', object: user.user, func: user.setUser },
      
    ]

    const components1 = [
        { id: 5, component:Myselect, values:Role,label:'role', title: 'Set user role', value: "role", object: user.user, func: user.setUser },      
        { id: 6, component:Myselect, values:Location,label:'location', title: 'Set user role', value: "location", object: user.user, func: user.setUser },     
      
    ]


    const components2=[]
    const role=Role

    
    const steps = [
        "User Information",
        "Role management",
        "Notification",
        "Complete",
    ];

    const messages={title:'data filled in successfully',body:'left just a little bit...',buttonText:'Create user'}

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Account components={components} />;
            case 2:
                return <Account components={components1} />;
            case 3:
                return <Account  components={components2}/>;
            case 4:
                return <Final message={messages} setValue={user.addUsers}/>;

        }
    };

    const title = 'User Details'

    return (

        <div className={classes.content}>

            <div className={classes.left}>

            </div>
            <div className={classes.center}>
                <div>
                    <div className={classes.centerItem}>

                        <AddComponentForm components={components} title={title} addComponent={user.user} object={user.user} steps={steps} displayStep={displayStep} />

                    </div>
                </div>
            </div>
            <div className={classes.right}>
           
            </div>
        </div>
    )
}


export default Create
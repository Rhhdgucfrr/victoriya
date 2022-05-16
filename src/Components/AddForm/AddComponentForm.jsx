import React, { useContext, useState } from "react";
import Stepper from "../../UI/Steper/Step";
import StepperControl from "../../UI/Steper/StepperControl";
import { UsersContext } from "../../context/UsersContext";


function AddComponentForm({steps,displayStep}) {

    const [currentStep, setCurrentStep] = useState(1);   

   const user=useContext(UsersContext)

    const handleClick = (direction, event) => {

        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
       
    };

    return (

        <div style={{width:'800px'}}>              
                    <Stepper steps={steps} currentStep={currentStep} />
                    <div className="my-10 p-10 ">
                       {displayStep(currentStep)}
                    </div>
                     
                {currentStep !== steps.length && (
                    <StepperControl
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                )}
           
        </div>
    )
}

export default AddComponentForm
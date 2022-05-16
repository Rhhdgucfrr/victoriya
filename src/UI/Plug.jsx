import React from "react-dom";


function Plug({title,message}){
    return (
        <div style={{ display: 'flex', justifyContent: 'center' ,flexDirection:'column',flexWrap:'wrap',alignItems:'center',alignContent:'center', width:'100%'}}>
          <div className="mt-3 text-xl font-semibold uppercase text-gray-600">
              {title}
          </div>
          <div className="text-lg font-semibold text-gray-500 ">
               {message}
          </div>
          </div>
    )
}
export default Plug
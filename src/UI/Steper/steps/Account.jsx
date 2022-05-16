
function Account({ components }) {

  return (

    <div className="flex flex-col " style={{ display: 'flex' }}>
      {components.length !== 0
        ? <div className="mx-2 w-full flex-1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {components.map((component) =>
            <component.component title={component.title}
              plaseholder={component.placholder}
              label={component.label}
              values={component.values}
              key={component.id}
              value={component.value}
              object={component.object}
              setValue={component.func}
            />
          )}
        </div>
        : <div style={{ display: 'flex', justifyContent: 'center' ,flexDirection:'column',flexWrap:'wrap',alignItems:'center',alignContent:'center'}}>
          <div className="mt-3 text-xl font-semibold uppercase text-red-900">
               Something went wrong...
          </div>
          <div className="text-lg font-semibold text-gray-500 ">
               This step requires a connection to the server <br/>
               if you see this message, the connection failed<br/>
               try later...
          </div>
        </div>
      }
    </div>
  );
}
export default Account

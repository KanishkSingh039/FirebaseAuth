import Commoninput from "./commoninput";

function Commonform({formcontrols,getinputvalue,setgetinputvalue , buttonvalue, handlesubmit})
{
    function handleformelement(singleelement)
    {
        let element=null;
        switch (singleelement?.componenttype) {
            case 'input':
                element=<Commoninput
                type={singleelement?.type}
                name={singleelement?.name}
                value={getinputvalue[singleelement?.name]}
                placeholder={singleelement?.placeholder}
                handlechange={event=>{
                    setgetinputvalue({
                        ...getinputvalue,
                        [singleelement?.name]:event.target.value
                })
                }}
                />
                
                break;
        
            default:
                element=<Commoninput
                type={singleelement?.type}
                name={singleelement?.name}
                value={getinputvalue[singleelement?.name]}
                placeholder={singleelement?.placeholder}
               handlechange={event=>{
                    setgetinputvalue({
                        ...getinputvalue,
                        [singleelement?.name]:event.target.value
                })
                }}
                />
                break;
        }
        return element;
        
    }
    return(
        <form onSubmit={handlesubmit}>
            {
                formcontrols?.map(singleelement=>{
                   return( handleformelement(singleelement))
                })
            }
            <button>{buttonvalue||"Submit"}</button>
        </form>
    )
}
export default Commonform
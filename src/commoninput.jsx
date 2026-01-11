

function Commoninput({type,value,placeholder,handlechange})
{
    return(
        <input type={type||"text"}
        value={value}
        placeholder={placeholder||"Enter the text"}
        onChange={handlechange}
        />
    )
}
export default Commoninput
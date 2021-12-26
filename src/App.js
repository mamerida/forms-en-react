import { useState } from "react"

const App = () =>{
    const[ value, setValue ] = useState("")
    const handleChange = (e) =>{
        setValue(e.target.value)
    }
    console.log(value)
    return(
        <div>
            {/* gracias al useState puedo hacer validaciones en tiempo real  */}
            {value.length < 5 ? <span>Longitud minima de 5</span> : null}
            {/* en un componente controlado tengo que pasarle el valor que va a manejar junto con una funcion onChange que maneje los cambios  */}
            <input name="normal" type="text" value={value} onChange={handleChange}/>
        </div>
    )
}
export default App
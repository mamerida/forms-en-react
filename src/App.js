import { useState } from "react"

const App = () =>{
    //para poder manejar varios inputs de manera simultanea sin necesidad de duplicar el useState paso un objeto al valor inicial con
    //los distintos nombres de los inputs para que asi en el handleChange dependiendo del nombre que lo invoco guarda uno y otro
    const[ value, setValue ] = useState({normal: '' , texto: '',select:'' }) // para darle valores iniciales los paso aca 
    const handleChange = (e) =>{

        // con e.target.name puedo revisar el nombre del input que llama a la funcion 
        // en este caso mediante las llaves digo que la propiedad va a ser dinamica y dependiendo del nombre sera donde se asigne el valor 
        // setValue({[e.target.name]:e.target.value}) al dejarlo de esta manera se elimina la propiedad que no esta siendo completada 
        // de las siguientes dos maneras se soluciona, lo que se hace es se concatena al value anterior la modificacion pasada en el front 
        // setValue({...value,[e.target.name]:e.target.value}) 
        setValue((state) => ({
            ...state,
            [e.target.name]:e.target.value
        }))
    }
    console.log(value)
    return(
        <div>
            {/* gracias al useState puedo hacer validaciones en tiempo real  */}
            {value.length < 5 ? <span>Longitud minima de 5</span> : null}
            {/* en un componente controlado tengo que pasarle el valor que va a manejar junto con una funcion onChange que maneje los cambios  */}
            <input name="normal" placeholder="Hola mundo "type="text" value={value.normal} onChange={handleChange}/><br/><br/>
            <textarea name="texto" value={value.texto} onChange={handleChange}/><br/>
            {/* agrego estas propiedades a la etiqueta de select para poder manejarlo en el useState */}
            <select value={value.select} name="select" onChange={handleChange}>
                <option value="">-- Seleccione su chanchito-- </option>
                <option value="chanchofeliz">-- Chancho Feliz -- </option>
                <option value="chanchitofeliz">--  Chanchito Feliz -- </option>
                <option value="chanchitotriste">-- Chanchito Triste -- </option>
                <option value="felipe">-- Felipe -- </option>
            </select>
        </div>

    )
}
export default App



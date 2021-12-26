import { useRef } from "react"

const App = () =>{
    //para poder capturar los valores de los elementos uso useRef una por campo
    const input = useRef()
    const file = useRef()

    //creo la funcion submit en el onclick para simular un form sin la etiqueta correspondiente 

    const submit = () =>{
        // con la sintaxis de files puedo acceder a los datos del archivo subido 
        console.log(file.current.files[0])
        // en este caso tomo los valores de mis inputs tanto archivos como campo y creo un form para poder trabajarlo con new FormData()
        const form= new FormData()
        form.append('archivo',file.current.files[0])
        form.append('campo',input.current.value)
        //mediante api fetch lo envio a cualquier lado
        // /lala es una enpoint seria parecio a enviar esto a un servidor 
        fetch('/lala' ,{method:'POST', body:form})
    }



    return(
        <div>
            <div>
                <span>LALA</span><br/>
                <input type="text" name="campo" ref={input}/><br/>
                <input type="file"  ref={file}/><br/>
                <input type="submit" name="Enviar" onClick={submit} />
                
            </div>
        </div>
    )
}
export default App
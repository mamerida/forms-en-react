

function App() {
  //el evento e recibe los valores al presionar submit y evito que recargue la pagina
  //para yo poder acceder a los valores de los formularios dentor del evento lo paso como argumento dentro de 
  // new FormData
  //para poder trabajar con el objeto de manera mas sencilla lo transformo en un array con Array.from(new FormData(e.target))
  //esto me entrega un arreglo de arreglos donde el primer elemento es el nombre del campo y el tercero el valor

  const submit = (e) =>{
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data)) // esto lo que hace es toma el array 
                                          // lo transforma en objeto y llama al campo como el nombre del input y al valor como su valor dentro del objeto

  }

  return (
    //para evitar que la pagina renderize con los campos del formulario y poder atrapar el evento submit uso onSubmit
    <form onSubmit={submit} >
      <div>
        <span>
          lala
        </span><br/>
        <input name='campo' />
      </div>
      <input name='campo2' />
      {/* para manejar inputs del tipo file nos manejamos como cualquier otro input solo que cambiamos el titulo y el tipo fromEntries se encargara del resto */}
      <input  type="file" name='archivo1' />
      <input type='submit' value="Enviar"/>
    </form>
  );
}

export default App;

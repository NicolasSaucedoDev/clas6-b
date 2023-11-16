import {Fragment} from 'react'

const campos = [
    {
      type: "text", 
      name: "user", 
      label: "Usuario", 
      placeholder: "Ingrese su usuario",
    },
    { 
      type: "password", 
      name: "password", 
      label: "Contraseña", 
      placeholder: "Ingrese su contraseña"
    }
  ]


const MyForm = () => {

    return(
        <form action="#">
            {campos.map((dat, index)=>{
            return (
              <Fragment key={index}>
                <label htmlFor={dat.name}>{dat.label}</label>
                <input type={dat.type} name={dat.name} placeholder={dat.placeholder}></input>
              </Fragment>
            )
            })}

            <button type="submit">Enviar</button>
        </form>
    )
}

export default MyForm
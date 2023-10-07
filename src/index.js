import React from 'react'
import ReactDOM from 'react-dom'

// Componentes Multiples
const Mensaje = () => {
  return  <h1>Este es el mensaje</h1>
}

const Description = () => { 
  return (
    <div>
      <p>Esta es la descripción</p>
    </div>
  ) 
  
}
// No es de buena práctica poner más de un componente.

// Componentes con parámetros
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Pintado = (props) => {
  return (
    <div>
      <h2 style={{ color:props.color }}>El color es {props.pintura}</h2>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Mensaje />
      <Description />
      <Hello name="Juan" age={26 + 10} />
      <Pintado color='red' pintura='Rojo'/>
    </div>
      
  )
}
ReactDOM.render(<App />, document.getElementById('root')) 

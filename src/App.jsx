import React from 'react'
import { Fragment } from 'react'

import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'


function App() {
  const variables = {
    saludo: "HOLA",
    gudbai: "Chau",
    metido: "ESTOY ADENTRO DE TODOS!! (LTA)"
  }

  return (
    <Fragment>
    <ClassComponent mensaje = { variables } />
    <FunctionalComponent mensaje = { variables }/>    
    </Fragment>
  )
}

export default App

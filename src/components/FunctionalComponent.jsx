import React from 'react'
import { Fragment } from 'react'
import ComponenteMetiche from './ComponenteMetiche'

const FunctionalComponent = (props) => {
    
  return (
    <Fragment>
        <h2>ESTO ES FUNCTIONAL</h2>
    <div>
        {props.mensaje.saludo}
        <div>
            <ComponenteMetiche msj = {props.mensaje.metido}/>
        </div>
    </div>
    </Fragment>
  )
}

export default FunctionalComponent

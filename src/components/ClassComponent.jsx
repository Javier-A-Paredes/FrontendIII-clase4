import React, {Component} from 'react';
import ComponenteMetiche from './ComponenteMetiche'

class ClassComponent extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
       const propiedades = this.props
        return (            
            <div>
                <h1>
                    {this.props.mensaje.saludo}                   
                </h1>  
                <p>
                    {propiedades.mensaje.gudbai}
                </p>

                <div>
                    <ComponenteMetiche msj = {propiedades.mensaje.metido}/>
                </div>
            </div>         
        )
    }
}

export default ClassComponent;

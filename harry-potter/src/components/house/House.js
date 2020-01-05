import React, {Component} from 'react';
import './House.css'

class House extends Component{

    render(){
        return(
            <div className="House">
                <h1>{this.props.houseName}</h1>
                <img src={this.props.img} alt=""/>
                <h5>{this.props.founder}</h5>
                <h5>{this.props.element}</h5>
            </div>
        )
    }

}


// const fun = function(name){
//     return "hello" + name
// }

// fun("ahmed")
// fun("maha")


export default House;
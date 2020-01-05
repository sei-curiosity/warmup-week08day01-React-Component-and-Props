import React, {Component} from 'react';
import './Character.css';
class Character extends Component{
    render(){
     
        return(
            <div className="Character">
               <h1>{this.props.info.notableCharacter.charName}</h1>
               <img src={this.props.info.notableCharacter.imgSrc} alt="" />
               <h5>{this.props.info.houseName}</h5>
            </div>
        )
    }
}

export default Character;
import React from 'react';
import './Pokecard.css';

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends React.Component {
  render(){
    let imgIdNb = `${this.props.id}.png`;
    if(this.props.id < 9){
        imgIdNb = "0"+imgIdNb
    };
    if(this.props.id < 99){
        imgIdNb = "0"+imgIdNb
    };

    let imgSrc = `${POKE_API}${imgIdNb}`
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        
        <div className="Pokecard-image">
            <img 
                src={imgSrc}
                alt={this.props.name}
            />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;

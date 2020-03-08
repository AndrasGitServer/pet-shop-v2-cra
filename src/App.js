import React, { Component } from 'react';
import './App.css';
import PetComponent from './components/PetComponent';


const name = "Andrew";
// App can receive a prop from the file: index.js !
// then change the line App to App(props)


const pets_ara = [
  { species: 'Dingo',   noise: 'noise awooooo',       color: 'darkorange' },
  { species: 'Turtle',  noise: 'noise eating grapes', color: 'olive' },
  { species: 'Penguin', noise: 'noise kikiki',        color: 'yellow' }
];


function makePets() {

  const response_pets_ara = [];
  let j = 10;

  for (let pet of pets_ara) {
    response_pets_ara.push(
      <PetComponent
        key={j}
        species={pet.species} 
        noise={pet.noise}
        color={pet.color}
      />
    );
    j++;
  }
  console.log(response_pets_ara);
  return response_pets_ara;
}


class App extends Component {

  render() {
    return (
      <div>

        <h2>Welcome to {name}'s petshop !</h2>

        {/* *** way 1 *** */}

        <PetComponent species='Dingo' noise='noise awooooo' color='darkorange'/>
        <PetComponent species='Turtle' noise='noise eating grapes'color='olive'/>
        <PetComponent 
          species='Penguin' 
          noise='noise kikiki' 
          color='yellow'
        />

        {/* *** way 2 *** */}

        {
          makePets()
        }

        {/* *** way 3 *** */}

        {
          pets_ara.map( (pet, i) => 
            <PetComponent 
              key={i}
              species={pet.species} 
              noise={pet.noise}
              color={pet.color}
          />
          )
        }

      </div>
    );
  }
} // App ***


export default App;


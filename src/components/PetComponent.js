import React, {Component, useState} from 'react';

// Change a class component into a functional component !
// class PetComponent extends Component {

//   pet_fun = event => {

//     console.log(event);   // Synthetic event
//     console.log(event.target);
//     event.target.style["backgroundColor"] =  this.props.color ;
//     //event.target.style.color = "white";
    
//     alert(`*** The ${this.props.species} says ${this.props.noise} ***`);
    
//   }


//   render() {

//     return (
//       <fieldset>
//         <legend> { this.props.species } </legend>
//         <button onClick={ this.pet_fun }>Pet the { this.props.species }</button>
//       </fieldset>

//     );
//   }

// } // Pet_component ***


const PetComponent = props => {

  // useState is a Hook function that will give back an array
  // The array contains a primitive variable or an object
  // depending how we initialize it
  // and also will give back a function to update the state.
  // (the primitive variable or an object).

  const [petsReceived, setPetsReceived] = useState(1);


  const pet_fun = event => {
    console.log(event);         // Synthetic event
    console.log(event.target);
    event.target.style["backgroundColor"] =  props.color ;
    //event.target.style.color = "white";

    
    alert(`*** The ${props.species} says ${props.noise} ***`);
    alert(`*** THe ${props.species} has been petted ${petsReceived} time(s)`);
    
    setPetsReceived( petsReceived + 1);
  }


  return(

    <fieldset>
      <legend> { props.species } </legend>
      <button onClick={ pet_fun }>Pet the { props.species }</button>
    </fieldset>
  
  );

} // PetComponent functional component ***


export default PetComponent;


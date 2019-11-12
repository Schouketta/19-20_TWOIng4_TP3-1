import './App.css';
import React, { Component } from 'react';


import Navbar from './Components/Navbar/Navbar';
import CardFull from './Components/CardFull/CardFull';
import CardProfil from './Components/CardProfil/CardProfil';
import CardMurPublications from './Components/CardMurPublications/CardMurPublications';

class App extends Component {

  render(){
/*
    const profils = [
      {
        nom: bob
      },
      {
        nom: martine
      },
      {
        nom: camille
      }
    ];
*/
    return (
      <div>
        <Navbar/>
        <CardMurPublications/>
      </div>
    );
  }
}

export default App;

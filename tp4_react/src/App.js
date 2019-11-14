import './App.css';
import React, { Component } from 'react';


import Navbar from './Components/Navbar/Navbar';
import CardFull from './Components/CardFull/CardFull';
import CardProfil from './Components/CardProfil/CardProfil';

import salameche from './salameche.PNG';
import bulbizarre from './bulbizarre.PNG';
import carapuce from './carapuce.PNG';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={

      profilActif : 0 // 0 c'est bulbizarre
    }

    this.changerEtat=this.changerEtat.bind(this);
  }

  changerEtat(nouvelEtat)
  {
    this.setState(state => ({
      profilActif:nouvelEtat
    })
    );
  }


  render(){

    const profils = [
      {
        profil:
        {
          prenom:"Bulbizarre", 
          nom:"Plante",
          dateDeNaissance:"28 novembre 1998",
          photo:bulbizarre
        },
       
        publi:
        {
          contenuPublication:"Un jour je serai le meilleur dresseur je me battrai sans répit je ferai tout pour être vainqueur et gagner les défis je parcourerai la terre entière traquant avec espoir les pokemons et leurs mystères le secret de leurs pouvoirs",
          infoPublication:"Posted 3 mins ago" 
        }
        
      },
      {
        profil:
        {
          prenom:"Salamèche" , 
          nom:"Feu" ,
          dateDeNaissance:"25 décembre 1998",
          photo:salameche
        },
       
        publi:
        {
          contenuPublication:"I was born from ashes of the bridges I have burned I have learned to emerge from the rubble like a firebird.",
          infoPublication:"Posted 6 mins ago"
 
        }
    
        
      },
      {
        profil:
        {
          prenom:"Carapuce", 
          nom:"Eau",
          dateDeNaissance:"14 mars 2017",
          photo:carapuce
        },
       
        publi:
        {
          contenuPublication:"Je peux retenir ma respiration sous l'eau pendant cinq heures <3",
          infoPublication:"Posted 8 mins ago" 
        }
      }
    ];

    return (
      <div>
        <Navbar profil0={() => this.changerEtat(0) }
        profil1={() => this.changerEtat(1) }
        profil2={() => this.changerEtat(2) }
        />
        <CardFull data={profils[this.state.profilActif]}/>

      </div>
    );
  }
}

export default App;

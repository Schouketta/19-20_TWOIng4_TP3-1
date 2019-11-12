import React, { Component } from 'react';

import CardFull from '../CardFull/CardFull'
import "./CardMurPublications.css";
import salameche from './salameche.PNG';
import bulbizarre from './bulbizarre.PNG';
import carapuce from './carapuce.PNG';

class CardMurPublications extends Component {
    render() {
        return (
            <div className="murPublication">
                <CardFull prenom="Bulbizarre" nom="Plante" dateDeNaissance="28 novembre 1998" contenuPublication="Un jour je serai le meilleur dresseur je me battrai sans répit je ferai tout pour être vainqueur et gagner les défis je parcourerai la terre entière traquant avec espoir les pokemons et leurs mystères le secret de leurs pouvoirs" infoPublication="Posted 3 mins ago" photo={bulbizarre}/>
                <CardFull prenom="Salamèche" nom="Feu" dateDeNaissance="25 décembre 1998" contenuPublication="I was born from ashes of the bridges I have burned I have learned to emerge from the rubble like a firebird." infoPublication="Posted 6 mins ago" photo={salameche}/>
                <CardFull prenom="Carapuce" nom="Eau" dateDeNaissance="20 octobre 1998" contenuPublication="Je peux retenir ma respiration sous l'eau pendant cinq heures <3" infoPublication="Posted 12 mins ago" photo={carapuce}/>
            </div>
        );
    }
}

export default CardMurPublications;
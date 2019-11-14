import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

import './CardPublication.css'

import { FaThumbsUp } from 'react-icons/fa';


class CardPublication extends Component {

    constructor(props)
    {
        super(props);

        this.incrementerSuper=this.incrementerSuper.bind(this);
        this.incrementerLikeBulbi=this.incrementerLikeBulbi.bind(this);
        this.incrementerLikeSala=this.incrementerLikeSala.bind(this);
        this.incrementerLikeCara=this.incrementerLikeCara.bind(this);

        this.state={
            nbLikeBulbi:0,
            nbLikeSala:0,
            nbLikeCara:0
            
        }
    }

   

    incrementerSuper(prenom)
    {
        if(prenom == "Bulbizarre")
        { 
            this.incrementerLikeBulbi();
        }
        else if(prenom == "Salamèche")
        {
            this.incrementerLikeSala();
        }
        else if(prenom =="Carapuce")
        {
            this.incrementerLikeCara();
        }
    }

    incrementerLikeBulbi()
    {
        const cpt = this.state.nbLikeBulbi;
        this.setState(state => ({ nbLikeBulbi: cpt + 1 }));
        
    }

    incrementerLikeSala()
    {
        const cpt = this.state.nbLikeSala;
        this.setState(state => ({ nbLikeSala:cpt + 1 }));
    }

    incrementerLikeCara()
    {
        const cpt = this.state.nbLikeCara;
        this.setState(state => ({ nbLikeCara: cpt + 1 }));
    }

    render() {

        const {publi} = this.props;
        const {profil}=this.props;

        if(profil.prenom == "Bulbizarre")
        {
            return (
                <div>
                    
                    <Card className="publication">
                    <CardBody>
                        <CardText>{publi.contenuPublication}</CardText>
                        <Button onClick={() => this.incrementerSuper(profil.prenom)} color="success" className="buttonCardPublication"><FaThumbsUp/> C'est super </Button>

                        <CardText>Nombre de "C'est Super" : {this.state.nbLikeBulbi} </CardText>
                        <CardText>
                            <small className="text-muted">{publi.infoPublication}</small>
                        </CardText>
                    </CardBody>
                    </Card>
                    
                </div>
            );
        }
        else if (profil.prenom == "Salamèche")
        {
            return (
                <div>
                    
                    <Card className="publication">
                    <CardBody>
                        <CardText>{publi.contenuPublication}</CardText>
                        <Button onClick={() => this.incrementerSuper(profil.prenom)} color="success" className="buttonCardPublication"><FaThumbsUp/> C'est super </Button>

                        <CardText>Nombre de "C'est Super" : {this.state.nbLikeSala} </CardText>
                        <CardText>
                            <small className="text-muted">{publi.infoPublication}</small>
                        </CardText>
                    </CardBody>
                    </Card>
                    
                </div>
            );
        }
        else if(profil.prenom == "Carapuce")
        {
            return (
                <div>
                    
                    <Card className="publication">
                    <CardBody>
                        <CardText>{publi.contenuPublication}</CardText>
                        <Button onClick={() => this.incrementerSuper(profil.prenom)} color="success" className="buttonCardPublication"><FaThumbsUp/> C'est super </Button>

                        <CardText>Nombre de "C'est Super" : {this.state.nbLikeCara} </CardText>
                        <CardText>
                            <small className="text-muted">{publi.infoPublication}</small>
                        </CardText>
                    </CardBody>
                    </Card>
                    
                </div>
            );
        }
        else 
        {
            alert("erreur :)");
            return null;
        }
    }
}

export default CardPublication;

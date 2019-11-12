import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

import './CardPublication.css'

import { FaThumbsUp } from 'react-icons/fa';



class CardPublication extends Component {

    constructor(props)
    {
        super(props);

        this.handleCompteur=this.handleCompteur.bind(this);

        this.state={
            contenuPublication:this.props.contenuPublication,
            infoPublication:this.props.infoPublication,
            nbLike:0


        }
    }

    handleCompteur(event)
    {
        event.preventDefault();
        this.setState({ nbLike: this.state.nbLike + 1 });
    }

    render() {
        return (
            <div>
                
                <Card className="publication">
                <CardBody>
                    <CardText>{this.props.contenuPublication}</CardText>
                    <Button onClick={this.handleCompteur} color="success" className="buttonCardPublication"><FaThumbsUp/> C'est super </Button>
                    <CardText>Nombre de "C'est Super" : {this.state.nbLike}</CardText>
                    <CardText>
                        <small className="text-muted">{this.props.infoPublication}</small>
                    </CardText>
                </CardBody>
                </Card>
                
            </div>
        );
    }
}

export default CardPublication;

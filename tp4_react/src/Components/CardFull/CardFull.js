import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import './CardFull.css';
import { Container, Row, Col } from 'reactstrap';
import CardProfil from '../CardProfil/CardProfil';
import CardPublication from '../CardPublication/CardPublication';

class CardFull extends Component {
    constructor(props)
    {
        super(props);
        //les props = constantes, peuvent se ballader entre les components
        //les states = modifiable avec setState
        this.state={
            prenom:this.props.prenom,
            nom:this.props.nom,
            dateDeNaissance:this.props.dateDeNaissance,
            contenuPublication:this.props.contenuPublication,
            infoPublication:this.props.infoPublication,
            photo:this.props.photo
        }
    }


    render() {
        return (
            <div>
                <Container >
                    <Row>
                        <Col  className="fullCard" sm={{ size: 8, order: 2, offset: 2 }}>
                        <Card >
                            
                            <CardBody>
                                <CardProfil prenom={this.props.prenom} nom={this.props.nom} dateDeNaissance={this.props.dateDeNaissance} photo={this.props.photo} />
                                <CardPublication contenuPublication={this.props.contenuPublication} infoPublication={this.props.infoPublication}/>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>

                </Container>
                
            </div>
        );
    }
}

export default CardFull;
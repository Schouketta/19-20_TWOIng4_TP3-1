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

    render() {

        const { profil, publi} = this.props.data;

        return (
            <div>
                <Container >
                    <Row>
                        <Col  className="fullCard" sm={{ size: 8, order: 2, offset: 2 }}>
                        <Card >
                            
                            <CardBody>
                                <CardProfil  profil={profil}/>
                                <CardPublication publi={publi} profil={profil}/>
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
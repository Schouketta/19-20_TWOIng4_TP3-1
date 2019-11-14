import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


import NavbarButton from '../NavbarButton/NavbarButton'
import "./Navbar.css";


class Navbar extends Component 
{

    render() 
    {
        return (
            <div className="_navbar">
                <Container>
                    <Row>
                       <Col sm={{ size: 'auto', offset: 6 }}> <NavbarButton prenom="Salamèche" profilActif={this.props.profil1}/> </Col>
                       <Col sm={{ size: 'auto', offset: 1 }}><NavbarButton prenom="Bulbizare" profilActif={this.props.profil0}/> </Col>
                       <Col sm={{ size: 'auto', offset: 1 }}><NavbarButton prenom="Carapuce" profilActif={this.props.profil2}/></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Navbar;

import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import './CardProfil.css';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import { Collapse} from 'reactstrap';



class CardProfil extends Component {

    constructor(props)
    {
        super(props);
        //les props = constantes, peuvent se ballader entre les components
        //les states = modifiable avec setState
        ///////////////////////:{require(this.props.photo)}
        this.handleChangeBulbi=this.handleChangeBulbi.bind(this);
        this.handleChangeCara=this.handleChangeCara.bind(this);
        this.handleChangeSala=this.handleChangeSala.bind(this);

        this.handleSubmitBulbi=this.handleSubmitBulbi.bind(this);
        this.handleSubmitCara=this.handleSubmitCara.bind(this);
        this.handleSubmitSala=this.handleSubmitSala.bind(this);
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.toggle = this.toggle.bind(this);
        
        this.state={
            prenom:this.props.prenom,
            nom:this.props.nom,
            dateDeNaissance:this.props.dateDeNaissance,
            photo:this.props.photo,
            show: false, //pour modals
            color:'',
            colorBulbi:'',
            colorSala:'',
            colorCara:'',
            modal: false
            
        }

       
    }

    toggle() {
     
        this.setState({
            modal: !this.state.modal
        });
    }
   
	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

    handleChangeBulbi(event)
    {
        this.setState({colorBulbi : event.target.value});
    }

    handleChangeCara(event)
    {
        this.setState({colorCara : event.target.value});
    }

    handleChangeSala(event)
    {
        this.setState({colorSala : event.target.value});
    }



    handleSubmitBulbi(event)
    {
        event.preventDefault();
        this.setState(state => ({
            colorBulbi: this.state.colorBulbi
        }));
    }

    handleSubmitCara(event)
    {
        event.preventDefault();
        this.setState(state => ({
            colorCara: this.state.colorCara
        }));
    }

    handleSubmitSala(event)
    {
        event.preventDefault();
        this.setState(state => ({
            colorSala: this.state.colorSala
        }));
    }



    
    render() {

        const {profil} = this.props;
       
        if(profil.prenom=="Bulbizarre")
        {

            return (
                <div>
                    
                    <Row>
                    <Col>
                        <Card style={{backgroundColor:this.state.colorBulbi}}>
                        <CardBody>
                            
                            <div className="ppCenter"><img className="pp" width="40%" src={profil.photo} /></div> 
    
                            <Row>
                            <Col sm={{ size: 'auto', offset: 0 }}><CardText>Prénom : {profil.prenom}</CardText></Col>
                            <Col sm={{ size: 'auto', offset: 6}}><CardText>Type : {profil.nom}</CardText></Col>
                            </Row>
                            <CardText>Date de naissance : {profil.dateDeNaissance}</CardText>
                            <Button color="info" className="buttonCardProfil" onClick={this.handleShow} onClick={this.toggle}>Change style</Button>
    
                        
                        <Modal isOpen={this.state.modal} show={this.state.show} onHide={this.handleClose} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>
                                Change background color
                            </ModalHeader>
                            <ModalBody>
                            <Form onSubmit={this.handleSubmitBulbi}>
                                <FormGroup>
                                    <Label for="exampleColor">Color</Label>
                                    <Input
                                    type="color"
                                    name="color"
                                    id="exampleColor"
                                    placeholder="color placeholder"
                                    value={this.state.colorBulbi}
                                    onChange={this.handleChangeBulbi}
                                    />
                                </FormGroup>
                                <Button type="submit" color="info" className="buttonCardProfil" onClick={this.toggle}>Close</Button>
                                </Form>
                                </ModalBody>
                                
                        </Modal>
                            
                            </CardBody>
                           
                        </Card>
                    </Col>
                    </Row>
    
                 
                </div>
            );
        }
        else if(profil.prenom=="Carapuce")
        {
            return (
                <div>
                    
                    <Row>
                    <Col>
                        <Card style={{backgroundColor:this.state.colorCara}}>
                        <CardBody>
                            
                            <div className="ppCenter"><img className="pp" width="40%" src={profil.photo} /></div> 
    
                            <Row>
                            <Col sm={{ size: 'auto', offset: 0 }}><CardText>Prénom : {profil.prenom}</CardText></Col>
                            <Col sm={{ size: 'auto', offset: 6 }}><CardText>Type: {profil.nom}</CardText></Col>
                            </Row>
                            <CardText>Date de naissance : {profil.dateDeNaissance}</CardText>
                            <Button color="info" className="buttonCardProfil" onClick={this.handleShow} onClick={this.toggle}>Change style</Button>
                            
                            
    
                        
                        <Modal isOpen={this.state.modal} show={this.state.show} onHide={this.handleClose} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>
                                Change background color
                            </ModalHeader>
                            <ModalBody>
                            <Form onSubmit={this.handleSubmitCara}>
                                <FormGroup>
                                    <Label for="exampleColor">Color</Label>
                                    <Input
                                    type="color"
                                    name="color"
                                    id="exampleColor"
                                    placeholder="color placeholder"
                                    value={this.state.colorCara}
                                    onChange={this.handleChangeCara}
                                    />
                                </FormGroup>
                                <Button type="submit" color="info" className="buttonCardProfil" onClick={this.toggle}>Close</Button>
                                </Form>
                                </ModalBody>
                                
                        </Modal>
                            
                            </CardBody>
                           
                        </Card>
                    </Col>
                    </Row>
    
                 
                </div>
            );
        }
        else if(profil.prenom=="Salamèche")
        {
            return (
                <div>
                    
                    <Row>
                    <Col>
                        <Card style={{backgroundColor:this.state.colorSala}}>
                        <CardBody>
                            
                            <div className="ppCenter"><img className="pp" width="40%" src={profil.photo} /></div> 
    
                            <Row>
                            <Col sm={{ size: 'auto', offset: 0 }}><CardText>Prénom : {profil.prenom}</CardText></Col>
                            <Col sm={{ size: 'auto', offset: 6 }}><CardText>Type : {profil.nom}</CardText></Col>
                            </Row>
                            <CardText>Date de naissance : {profil.dateDeNaissance}</CardText>
                            <Button color="info" className="buttonCardProfil" onClick={this.handleShow} onClick={this.toggle}>Change style</Button>
                            
                            
    
                        
                        <Modal isOpen={this.state.modal} show={this.state.show} onHide={this.handleClose} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>
                                Change background color
                            </ModalHeader>
                            <ModalBody>
                            <Form onSubmit={this.handleSubmitSala}>
                                <FormGroup>
                                    <Label for="exampleColor">Color</Label>
                                    <Input
                                    type="color"
                                    name="color"
                                    id="exampleColor"
                                    placeholder="color placeholder"
                                    value={this.state.color.Sala}
                                    onChange={this.handleChangeSala}
                                    />
                                </FormGroup>
                                <Button type="submit" color="info" className="buttonCardProfil" onClick={this.toggle}>Close</Button>
                                </Form>
                                </ModalBody>
                                
                        </Modal>
                            
                            </CardBody>
                           
                        </Card>
                    </Col>
                    </Row>
    
                 
                </div>
            );
        }

        
    }
}

export default CardProfil;
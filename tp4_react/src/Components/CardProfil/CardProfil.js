
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
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
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

    handleChange(event)
    {
        this.setState({color : event.target.value});
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.setState(state => ({
            color: this.state.color
        }));
    }



    
    render() {

        const {profil} = this.props;
       
        return (
            <div>
                
                <Row>
                <Col>
                    <Card style={{backgroundColor:this.state.color}}>
                    <CardBody>
                        
                        <div className="ppCenter"><img className="pp" width="40%" src={profil.photo} /></div> 


                        <CardText>Prénom : {profil.prenom}</CardText>
                        <CardText>Nom : {profil.nom}</CardText>
                        <CardText>Date de naissance : {profil.dateDeNaissance}</CardText>
                        <Button color="info" className="buttonCardProfil" onClick={this.handleShow} onClick={this.toggle}>Change style</Button>
                        
                        

                    
                    <Modal isOpen={this.state.modal} show={this.state.show} onHide={this.handleClose} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>
                            Change background color
                        </ModalHeader>
                        <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleColor">Color</Label>
                                <Input
                                type="color"
                                name="color"
                                id="exampleColor"
                                placeholder="color placeholder"
                                value={this.state.color}
                                onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button type="submit" color="info" className="buttonCardProfil" >Change style</Button>
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

export default CardProfil;
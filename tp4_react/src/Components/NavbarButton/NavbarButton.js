import React, { Component } from 'react';
import { Button } from 'reactstrap'; //pour reactstrap un boutton

import './NavbarButton.css';

class NavbarButton extends Component 
{
    constructor(props)
    {
        super(props);
        //les props = constantes, peuvent se ballader entre les components
        //les states = modifiable avec setState
        this.state={
            prenom:this.props.prenom
        }
    }
    render() 
    {
        return (
            
               <Button style={{backgroundColor:this.props.colorBtn}} onClick={this.props.profilActif} > {this.props.prenom} </Button>
            
        );
    }
}

export default NavbarButton;
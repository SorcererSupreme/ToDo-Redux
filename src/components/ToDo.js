import React, { Component } from 'react';

class ToDo extends Component{
    render(){
        return (
            <li>{this.props.item}<button type = "button">X</button></li>
        )
    }
}

export default ToDo;
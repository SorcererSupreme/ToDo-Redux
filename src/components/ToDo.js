import React, { Component } from 'react';

class ToDo extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <li>{this.props.item}<button type = "button" onClick = {()=>{this.props.onClick(this.props.item)}}>X</button></li>
        )
    }
}

export default ToDo;
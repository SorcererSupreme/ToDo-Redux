import React, { Component } from 'react';

class ToDo extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <li>{this.props.item}
                <button type = "button" onClick = {()=>{this.props.onClickDelete(this.props.item)}}>X</button>
                <button type = "button" onClick = {()=>{this.props.onClickComplete(this.props.item)}}>!</button>
            </li>
        )
    }
}

export default ToDo;
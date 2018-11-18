import React, { Component } from 'react';
import { connect } from 'react-redux';
import {completedToDoAction, deletedToDoAction} from '../redux/actions/actions.js'

class ToDo extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }


    render(){
        return (
            <li>{this.props.item}
                <button type = "button" onClick = {() =>{this.props.onClickDeleted(this.props.item)}}>X</button>
                <button type = "button" onClick = {() => {this.props.onClickCompleted(this.props.item)}}>!</button>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickCompleted: toDo => {
            dispatch(completedToDoAction(toDo));
        },
        onClickDeleted: toDo => {
            dispatch(deletedToDoAction(toDo))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ToDo);
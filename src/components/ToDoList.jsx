import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo.js'
import AddToDo from './AddToDo.js'

class ToDoList extends Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {fruits : props.allToDos}
    }

    createToDos(){
        
        var ToDos = this.props.allToDos.map((toDo)=>
                                    <ToDo key = {toDo.toString()} item = {toDo}></ToDo>)
        return ToDos;
    }


    render(){
        var ToDoListCompute = this.createToDos();
        return (
            <div>
                <AddToDo></AddToDo>
                {ToDoListCompute}
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        allToDos: state.ToDoReducer.toDo
    }
}

export default connect(
    mapStateToProps
)(ToDoList)

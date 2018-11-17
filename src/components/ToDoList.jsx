import React, { Component } from 'react';
import ToDo from './ToDo.js'
import AddToDo from './AddToDo.js'

class ToDoList extends Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {fruits : props.allToDos}
    }

    createToDos(){
        
        var ToDos = this.state.fruits.map((fruit)=>
                                    <ToDo key = {fruit.toString()} item = {fruit} 
                                                onClickDelete = {(toDo)=>this.props.onClickDelete(toDo)}
                                                onClickComplete = {(toDo) => this.props.onClickComplete(toDo)}></ToDo>)
        return ToDos;
    }

    // deleteToDo(toDo){
    //     var newfruits = this.state.fruits;
    //     var index = newfruits.indexOf(toDo);
    //     // console.log(index); 
    //     newfruits.splice(index,1);
    //     this.setState({fruits: newfruits});
    // }


    render(){
        var ToDoListCompute = this.createToDos();
        return (
            <div>
                <AddToDo onClick = {(value)=>{this.props.onClickAdd(value)}}></AddToDo>
                {ToDoListCompute}
            </div>
        )
    }
}
{/* <AddToDo onClick = {(value)=>{this.addToDo(value)}}></AddToDo> */}
export default ToDoList;
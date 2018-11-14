import React, { Component } from 'react';
import ToDo from './ToDo.js'
import AddToDo from './AddToDo.js'

class ToDoList extends Component{

    constructor(props){
        super(props);
        this.state = {fruits : ['bananas','apples','oranges','sitaphal']}
    }

    createToDos(){
        
        var ToDos = this.state.fruits.map((fruit)=>
                                    <ToDo key = {fruit.toString()} item = {fruit} onClick = {(toDo)=>this.deleteToDo(toDo)}></ToDo>)
        return ToDos;
    }

    addToDo(toDo){
        var newfruits = this.state.fruits;
        newfruits.push(toDo);
        this.setState({fruits : newfruits});
    }

    deleteToDo(toDo){
        var newfruits = this.state.fruits;
        var index = newfruits.indexOf(toDo);
        // console.log(index);
        newfruits.splice(index,1);
        this.setState({fruits: newfruits});
    }


    render(){
        var ToDoListCompute = this.createToDos();
        return (
            <div>
                <AddToDo onClick = {(value)=>{this.addToDo(value);console.log(this.state)}}></AddToDo>
                {ToDoListCompute}
            </div>
        )
    }
}
export default ToDoList;
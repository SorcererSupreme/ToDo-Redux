import React, { Component } from 'react';
import ToDo from './ToDo.js'

class ToDoList extends Component{

    constructor(props){
        super(props);
        this.state = {fruits : ['bananas','apples','oranges','sitaphal']}
    }

    createToDos(){
        
        var ToDos = this.state.fruits.map((fruit)=>
                                    <ToDo key = {fruit.toString()} item = {fruit}>wefwe</ToDo>)
        return ToDos;
    }


    render(){
        var ToDoListCompute = this.createToDos();
        return (
            <div>
                {ToDoListCompute}
            </div>
        )
    }
}
export default ToDoList;
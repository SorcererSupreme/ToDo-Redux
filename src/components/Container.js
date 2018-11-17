import React, {Component} from 'react';
import ToDoList from './ToDoList.jsx';
import CompletedToDo from './CompletedToDo.js';
import DeletedToDo from './DeletedToDo.js';
import {Link, Route} from 'react-router-dom';

class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            toDos : ['banansdsdsas', 'orange', 'apple','mango'],
            completedToDos : [],
            deletedToDos : []
        }
    }


    addToDo(toDo){
        var newToDos = this.state.toDos;
        newToDos.push(toDo);
        console.log("container add method is invoked!");
        this.setState({toDos : newToDos});
    }

    deleteToDo(toDo){
        var newToDos = this.state.toDos;
        var index = newToDos.indexOf(toDo);
        newToDos.splice(index,1);

        //also update the deletedToDos tab!

        var newDeletedToDos = this.state.deletedToDos;
        newDeletedToDos.push(toDo);
        this.setState({
            toDos : newToDos,
            deletedToDos: newDeletedToDos});
    }

    completedToDo(toDo){
        var newToDos = this.state.toDos;
        var index = newToDos.indexOf(toDo);
        newToDos.splice(index,1);
        this.setState({toDos : newToDos});

        var newCompletedToDos = this.state.completedToDos;
        newCompletedToDos.push(toDo);
        console.log(newCompletedToDos)
        this.setState({completedToDos: newCompletedToDos});
    }


    render(){
        return(
            <div>
                <Link to = "/AllToDo"> All</Link>
                <Link to ="/CompletedToDo">Completed</Link>
                <Link to = "/DeletedToDos">Trash</Link>

                <Route path = '/AllToDo' render = {(props) => 
                    <ToDoList {...props} allToDos = {this.state.toDos} 
                                         onClickAdd = {(value) => this.addToDo(value)}
                                         onClickDelete = {(value) => this.deleteToDo(value)}
                                         onClickComplete = {(value) => this.completedToDo(value)} />} 
                />

                <Route path = '/CompletedToDo' render = {(props) => <CompletedToDo {...props} completedToDos = {this.state.completedToDos} />} />

                <Route path = "/DeletedToDos" render = {(props)=> <DeletedToDo {...props} deletedToDos = {this.state.deletedToDos} />} />
            </div>
        )
    }
}

export default Container;
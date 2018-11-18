import React, {Component} from 'react';
import ToDoList from './ToDoList.jsx';
import CompletedToDo from './CompletedToDo.js';
import DeletedToDo from './DeletedToDo.js';
import {Link, Route} from 'react-router-dom';

class Container extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Link to = "/AllToDo"> All</Link>
                <Link to ="/CompletedToDo">Completed</Link>
                <Link to = "/DeletedToDos">Trash</Link>

                <Route path = '/AllToDo' component = {ToDoList} />
                
                <Route path = '/CompletedToDo' component = {CompletedToDo} />

                <Route path = '/DeletedToDos' component = {DeletedToDo} />

            </div>
        )
    }
}

export default Container;
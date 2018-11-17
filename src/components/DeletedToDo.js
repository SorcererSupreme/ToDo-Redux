import React, {Component} from 'react';

class DeletedToDo extends Component{
    constructor(props){
        super(props);
        console.log("props of trash: ", props);
        this.state = {deletedToDoList: props.deletedToDos}
    }

    deletedToDos(){
        
        var ToDos = this.state.deletedToDoList.map((toDo)=>
                                    <li key = {toDo.toString()} >{toDo}</li>)
        return ToDos;
    }

    render(){
        return(
            <div>
                <ul>
                   {this.deletedToDos()} 
                </ul>
            </div>
        )
    }
}
export default DeletedToDo;
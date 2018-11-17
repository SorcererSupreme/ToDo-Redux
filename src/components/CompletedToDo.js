import React, {Component} from 'react';

class CompletedToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            completedToDos: props.completedToDos
        }
    }

    completedToDos(){
        
        var ToDos = this.state.completedToDos.map((toDo)=>
                                    <li key = {toDo.toString()} >{toDo}</li>)
        return ToDos;
    }

    render(){
        return (
            <div>
                <ul>
                    {this.completedToDos()}
                </ul>
            </div>
        )
    }
}

export default CompletedToDo;
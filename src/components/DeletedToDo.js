import React, {Component} from 'react';
import { connect } from 'react-redux';

class DeletedToDo extends Component{
    constructor(props){
        super(props);
    }

    deletedToDos(){
        
        var ToDos = this.props.deletedToDoList.map((toDo)=>
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

const mapStateToProps = (state) => {
    return {
        deletedToDoList: state.ToDoReducer.deleted
    }
}

export default connect(
    mapStateToProps
)(DeletedToDo);
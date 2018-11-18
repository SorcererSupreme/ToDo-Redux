import React, {Component} from 'react';
import {connect} from 'react-redux';

class CompletedToDo extends Component {
    constructor(props){
        super(props);
        console.log(props)
        // this.state = {
        //     completedToDos: props.completedToDos
        // }
    }

    completedToDos(){
        
        var ToDos = this.props.completedToDos.map((toDo)=>
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

const mapStateToProps = (state) => {
    return {
        completedToDos: state.ToDoReducer.completed
    }
}


export default connect(
    mapStateToProps
)(CompletedToDo);
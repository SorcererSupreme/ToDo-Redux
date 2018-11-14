import React, {Component} from 'react';

class AddToDo extends Component{
    constructor(props){
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
          this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onClick(this.state.value);
        this.setState({value : ""})
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
                    <input type = "submit" value = "Add"  /> 
                </div>
            </form>
        )
    }
}

export default AddToDo;
import Input from './Input.js'
import React from 'react';
import moment from 'moment';


class OneTodo extends React.Component
{
    state = {
        editing:false
    }
    toggleEdit = () =>{
        this.setState({
            editing:!this.state.editing,
        });
    }
    
    render(){
        const todo = this.props.todo;

        const deleteTodo = this.props.deleteTodo;
        return (

            this.state.editing ?
            (
                <div>
                    <Input
                    todo = {todo} getTodos={this.props.getTodos}
                    cb = {this.toggleEdit}></Input>
                </div>
                
            ) : 
            (
                <div>
                    <div class = "delete float-left" onClick={()=>this.props.deleteTodo(this.props.todo._id)}></div>
                    <div class = "row">
                    <div class = "col" onClick={() => this.toggleEdit()}>{todo.action}</div>
                    <div class = "col"> {moment(todo.duedate).format('MMMM Do YYYY')}</div>
                    </div>
                    
                </div>
            )
        )
    }
}

export default OneTodo;
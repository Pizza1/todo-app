import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class Input extends Component{
    constructor(props){
        super(props);
       
        if(props.todo){
            this.state = Object.assign({}, this.props.todo)
            this.options = {
                text: "update todo",
                action: this.updateTodo,
            }
        }else{
            this.state = {
                    action: "",
                    duedate: Date.now(),
            }
            this.options = {
                text: "add todo",
                action: this.addTodo
            }

        }  
    }

    
    
    updateTodo = () =>{
        const task = Object.assign({}, this.state);
        if(task.action && task.action.length > 0){
            axios.patch(`/api/todos/${task._id}`, task)
            .then(res=>{
                this.props.getTodos();
                this.props.cb();
                // this.setState({action: ""});
            })
            .catch(err=>console.log(err));
        }else{
            console.log('input field required');
        }
    }
    addTodo = () => {
        const task = Object.assign({}, this.state);
        if(task.action && task.action.length > 0){
            axios.post('/api/todos', task)
            .then(res=>{
                this.props.getTodos();
                this.setState({action: ""});
            })
            .catch(err=>console.log(err));
        }else{
            console.log('input field required');
        }

    }

    
    handleChange = (e) =>{
        this.setState({
            action:e.target.value
        });
    }
    handleChangeDate = (e) =>{
        this.setState({
            duedate:e.target.value
        })
    }
    render(){
        let {action, duedate} = this.state

        return (
            <div>
                <div class="input-group mb-3">
                    <input type = "text" class="form-control" onChange = {this.handleChange} value = {action}/>
                    <input type= "date" class="form-control" onChange ={this.handleChangeDate} value = {moment(duedate).format('YYYY-MM-DD')}/>
                    <button class="btn btn-primary" onClick={this.options.action}>{this.options.text}</button>
                </div>
            </div>
        )
        }
    }
export default Input
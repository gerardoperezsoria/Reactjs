import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { todos } from './todosJSON.json'
class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'            
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]:value
        })
        console.log(this.state);
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending...');
    }

    
  render() {
    return (      
        <div className="">
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Title</label>
                  <input name="1" onChange={this.handleInput} type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Responsible</label>
                <input name="2" onChange={this.handleInput} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
              </div>
              <div className="form-group">
                <label for="inputAddress2">Description</label>
                <input name="3" onChange={this.handleInput} type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              </div>
                <div className="col-auto my-1">
                  <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                  <select name="4" onChange={this.handleInput} class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Prioridad</option>
                    <option value="1">low</option>
                    <option value="2">medium</option>
                    <option value="3">higth</option>
                  </select>
                </div>              
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>            
        </div>  
    );
  }
}

export default TodoForm;

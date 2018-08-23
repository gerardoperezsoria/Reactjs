import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppNav from './componentes/AppNav'
import Cards from './componentes/Cards';

import { todos } from './componentes/todosJSON.json'
import TodoForm from './componentes/TodoForm'
class App extends Component {
    constructor(){
        super();
        this.state = {
            todos
        }
//        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }
    
    handleInput(e){
        console.log(e.target.name+''+e.target.value);
    }
    
//    handleSubmit(e){
//        e.preventDefault();
//        console.log(this.state);
//        console.log('sneding...');
//    }
    
    handleAddTodo(todo){
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    removeTodo(index){
        this.setstate({
            todos: this.state.todos.filter((e,i)=>{
                return i != index
            })
        })
    }
    
  render() {
    const todo = this.state.todos.map((todo, i) => {
        return (
                <Cards title={todo.title} key={i}/>
        )
    })
    return (
      <div className="padre">
        <div className="header">
            <AppNav />
            
        </div>
        <div className="navegacion">
            <nav className="navegacion">
                Tasks
                <span class="badge badge-light">{ this.state.todos.length }</span>                
            </nav>
        </div>
        <div className="aside">a</div>
        <div className="aside2">a</div>
        <div className="contenido">
            <TodoForm onAddTodo={this.handleAddTodo}/>
            {todo}         
        </div>
        
        <div className="footer">f</div>
      </div>
    );
  }
}

export default App;

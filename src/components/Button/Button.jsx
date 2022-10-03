import React, {Component} from 'react'
// import { Constructor } from '@babel/types';

function Button() {
    const handleAddTodo = () =>{

    }
    
    return (
        <div>
            <input type="submit" value="add Todo" className="btn btn-primary" onClick={ this.handleAddTodo } />
        </div>
    )
}

export default Button

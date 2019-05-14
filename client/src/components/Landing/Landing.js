import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { request } from 'https';
import Post from '../Post/Post';




class Landing extends Component {
    constructor(){
      super()
  
      this.state = {
        name: '',
        list: [],
        error: null
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
   
      
  
    handleChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }
    async handleSubmit(e) {
      e.preventDefault()
  
      const {name} = this.state
  
      const form = await axios.post('/api/form', {
        name
      });

    }
    
   
  
    render() {
        
      return (
        <div>
            <h1 style={{textAlign:'center'}}>Compare</h1>

            <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
            <input 
                label="name"
                margin="normal"
                variant="outlined"
                name="name"
                for="name"
                onChange={this.handleChange}
            />
            <button variant="contained">Search</button>
            </form>
            
                 <Post/>
        </div>
      );
    }
  }

  export default Landing;
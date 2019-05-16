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
          <div className="container">
          <div className="row">
          <div className="col-lg-12">
            <h1 style={{textAlign:'center',fontFamily:'Roboto Mono', color:'white'}}>Let's Compare</h1>
            <p style={{textAlign:'center',fontFamily:'Roboto Mono', color:'white'}}><span style={{fontStyle:'italic'}}>Let's Compare </span>is a scraper tool that scrapes the top 5 items from Bing.com and Craigslist Charlotte.</p>
          <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
            <input 
                label="name"
                margin="normal"
                variant="outlined"
                name="name"
                for="name"
                style={{fontFamily:'Roboto Mono'}}
                onChange={this.handleChange}
            />
            <button variant="contained" style={{fontFamily:'Roboto Mono'}}>Compare!</button>
            </form>
          </div>
          </div>
          </div>
          

            
            
                 <Post/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                
                 
                
                

        </div>
      );
    }
  }

  export default Landing;
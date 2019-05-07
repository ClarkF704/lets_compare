import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';




class Home extends Component {
    constructor(){
      super()
  
      this.state = {
        name: ''
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

            <form style={{textAlign:'center'}}>
            <TextField
                id="outlined-name"
                label="Name"
                margin="normal"
                variant="outlined"
                name="name"
                onChange={this.handleChange}
            />
            <Button variant="contained">Search</Button>
            </form>
        </div>
      );
    }
  }

  export default Home;
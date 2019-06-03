import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';




class Landing extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: ''
    }
  }
  
  
  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }
    
  submitHandler = (e) =>{
    e.preventDefault()
    console.log(this.state)
    axios.post("https://powerful-citadel-66900.herokuapp.com/api/form", this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
  }
   
  
    render() {
        const {name} = this.state
      return (
        <div>
          <div className="container">
          <div className="row">
          <div className="col-lg-12">
            <h1 style={{textAlign:'center',fontFamily:'Roboto Mono', color:'white'}}>Let's Compare</h1>
            <p style={{textAlign:'center',fontFamily:'Roboto Mono', color:'white'}}><span style={{fontStyle:'italic'}}>Let's Compare </span>is a scraper tool that scrapes the top 5 items from Bing.com and Craigslist Charlotte.</p>
          <form onSubmit={this.submitHandler} style={{textAlign:'center'}}>
            <input 
                label="name"
                margin="normal"
                variant="outlined"
                name="name"
                value={name}
                onChange={this.changeHandler}
                style={{fontFamily:'Roboto Mono'}} 
            />
            <button variant="contained" style={{fontFamily:'Roboto Mono'}} type="submit">Compare!</button>
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
import React, { Component } from 'react';
import axios from 'axios'

class Couches extends Component {
    constructor() {
        super();
        this.state = {
            couches: []
        }
    }
    componentDidMount() {
        axios.get('/api/couches').then(response => {
            this.setState({couches: response.data})
        })
        console.log(this.state.couches)
    }
  
  render() {
    const couches =  this.state.couches.map(couch => {
        return <div>
            <h1>{couch.name}</h1>
            <img src={couch.image}/>
            <p>Price: {couch.price}</p>
        </div>
    })
    return (
        <div>
      <h1>Couches</h1>
      {couches}

      </div>
    );
  }
}

export default Couches;

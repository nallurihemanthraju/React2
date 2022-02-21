import React, { Component } from 'react'

export class Product extends Component {

  componentDidMount=()=>{
    console.log('first')
  }
  componentDidUpdate=()=>{
    console.log('second')
  }
  componentWillUnmount=()=>{
    console.log('third')
  }
  
  render() {
    return (
      <div>
      <button>Click</button>
      </div>
    )
  }
}

export default Product
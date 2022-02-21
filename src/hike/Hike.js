import React, { Component } from 'react'

class Hike extends Component {
    state={
        salary:40000
    }
    setHikeHandler=(hike)=>{
        this.setState({salary:this.state.salary + hike})
    }
  render() {
    return (
      <div>
          <div className='container mt-5'>
              <div className='row'>
                  <div className='col-md-8'>
                      <div className='card'>
                          <div className='card-header'>
                              <h3>salaray:{this.state.salary}</h3>
                                  
                          </div>
                          <div className='card-body'>
                              <button className='btn btn-success mr-2' onClick={this.setHikeHandler.bind(this, 5000)}>Hike 50k</button>
                              <button className='btn btn-primary mr-2' on onClick={this.setHikeHandler.bind(this, 50000)}>Hike 100k</button>
                             <button className='btn btn-warning mr-2' onClick={this.setHikeHandler.bind(this,50000)}>Hike 150</button>
                          </div>

                      </div>

                  </div>

              </div>

          </div>
      </div>
    )
  }
}

export default Hike
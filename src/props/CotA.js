import React, { Component } from 'react'

 class CotA extends Component {
     Name="hemanth"
     Rno=21
  render() {
    return (
      <div>
          <CotA
        name={this.Name}
        rno={this.Rno}
          />
      </div>
    )
  }
}

export default CotA
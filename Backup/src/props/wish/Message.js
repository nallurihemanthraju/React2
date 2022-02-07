import React from 'react'
class Message extends React.Component{
    constructor(props){
        super(props);
        console.log('first-const')
        this.state={
            message:"hello..."
        }
    }
    wishHandler=(msg)=>{
        console.log(msg);
        this.setState({message:msg})
    }
    render(){
        // console.log("second-render method()")
        return <React.Fragment>
        <h3>Message Value:{this.state.message}</h3>
        <button onClick={this.wishHandler.bind(this,"Good morning")}>GM</button>
        <button onClick={this.wishHandler.bind(this,'Good afternoon')}>GF</button>
        <button onClick={this.wishHandler.bind(this,'Good night')}> GN</button>
              </React.Fragment>
    }

}
export default Message
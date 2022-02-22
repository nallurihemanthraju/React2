import React from 'react'
 class Form extends React.Component{
     constructor(props){
         super(props)
         this.state={
             username:"",
             comments:"",
             topic:""
         }
     }
     UsernameHandler=(event)=>{
        this.setState({
            username:event.target.value
        })
     }
     CommentsHandler=(event)=>{
         this.setState({
             comments:event.target.value
         })
        
     }
     topicHandler=(event)=>{
         this.setState({
             topic:event.target.value
         })
     }
     SubmitHandler=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault()
    }
     render() {
         return(
            <form onSubmit={this.SubmitHandler}>
                <div>
                <lable>UserName</lable>
                <input type="text" value={this.state.username} onChange={this.UsernameHandler}/>
                </div>
                <div>
                    <lable>Comments</lable>
                    <input type="text" value={this.state.comments} onChange={this.CommentsHandler}/>
                </div>
                <div>
                    <lable>Topic</lable>
                    <select value={this.state.topic} onChange={this.topicHandler}>
                        <option value="react">React</option>
                        <option value="anguler">Anguler</option>
                        <option value="Php">Php</option>
                    </select>

                </div>
                <button>Submit</button>
            </form>
         )
     }
 }
 export default Form
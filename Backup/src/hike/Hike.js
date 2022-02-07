import React,{Component} from "react";
class Hike extends Component{
    state={
        salary:2000
    }
    setHikeHandelar=(hike)=>{
        console.log("");
        this.setState({salary:this.state.salary+hike})
    }
    render(){
        return(
            <>
            <div className="container">
              <div className="row">
                  <div className="col-md-6">
                   <div className="card">
                       <div className="card-header">
                           <h3> salary:{this.state.salary}</h3> 
                       </div>
                       <div className="card-body">
                           <button className="btn btn-success mr-2" onClick={this.setHikeHandelar.bind(this,5000)}>hike 50k</button>
                           <button className="btn btn-primary mr-2" onClick={this.setHikeHandelar.bind(this,10000)}>hike 100k</button>
                           <button className="btn btn-warning" onClick={this.setHikeHandelar.bind(this,1000000)}> hike 1000k</button>
                           
                       </div>
                   </div>
                 </div>
              </div>
            </div>
            </>
        )
    }
    
}
export default Hike
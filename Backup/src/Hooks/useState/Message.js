 import React,{useState} from 'react';
 let Message = () => {
      let[msg,setMsg]=useState("Raju")
   return <div>
       <h1>hello this is {msg}</h1>
       <button  className="btn btn-success" onClick={()=>{setMsg("hello,GM")}}>GM</button>
       <button className="btn btn-danger" onClick={()=>{setMsg("hello,GF")}}>GF</button>
       <button className="btn btn-primary" onClick={()=>{setMsg("hello,GN")}}> GN</button>
   </div>
 }
 export default Message
 
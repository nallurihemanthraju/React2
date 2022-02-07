import React, { useState } from 'react';
const MessageCopy = () => {
    let [msg,setMsg]=useState("Raju");
    let gmHandler=()=>{
        setMsg("GoodMorning")
    }
    let gfHandler=()=>{
        setMsg("GoodAfterMornig")
    }

  return <div>
      <h2>This is Hemath{msg}</h2>
      <button  className="btn btn-danger ml-4"onClick={gmHandler}>GM</button>
      <button className="btn btn-success ml-4"onClick={gfHandler}>GF</button>
  </div>;
}
export default MessageCopy

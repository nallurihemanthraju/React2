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
      <button onMouseLeave={gmHandler}>GM</button>
      <button onMouseLeave={gfHandler}>GF</button>
  </div>;
}
export default MessageCopy

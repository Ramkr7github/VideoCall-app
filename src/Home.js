import React, { useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [roomID,setRoomID]= useState();

    const navigate =useNavigate()

    const handleJoin = () =>{
          navigate(`/room/${roomID}`)
    }

  return (
   
    
    <div className='App'>
        
            
        <input className="box" type='text' placeholder='Enter RoomID' value={roomID} onChange={(e)=>{ setRoomID(e.target.value)}}></input>
        <button className='btn' onClick={handleJoin}>Join</button>
    </div>
    
  )
}

export default Home;

import React, { useState } from 'react'
import './App.css';
import VCimage from "./image/VCimage.jpg"
import icon from "./image/icon.png"
import { useNavigate } from 'react-router-dom';

function Home() {

    const [roomID,setRoomID]= useState();

    const navigate =useNavigate()

    const handleJoin = () =>{
          navigate(`/room/${roomID}`)
    }

  return (
   
    
    <div className='home'>
        <div className='containtBox'>
          
        <img className="icon" src={icon} alt="icon"/>

          <h1> Join Video Call</h1> 
        <input className="box" type='text' placeholder='Enter RoomID' value={roomID} onChange={(e)=>{ setRoomID(e.target.value)}}></input>
        <button className='btn' onClick={handleJoin}>Join</button>
        </div>
        <div className='imageBox'>
         
        <img className="hero" src={VCimage} alt="hero"/>

        </div>
            
        
    </div>
    
  )
}

export default Home;

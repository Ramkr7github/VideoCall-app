import React from 'react'
import './App.css';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {

  const {roomID} =useParams()
  let myMeeting = async (element) => {
    // generate Kit Token
     const appID = 2128351413;
     const serverSecret = "a3d40a6aeb3b2d49ffcdcb4646b33178";
     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),"Ram");
     const zp = ZegoUIKitPrebuilt.create(kitToken);

     zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url: `http://localhost:3000/room/${roomID}`
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      
        
      },
      showRoomTimer: true
    });
  }

  return (
    <div className="Room" ref={myMeeting}>Room</div>
  )
}

export default Room;
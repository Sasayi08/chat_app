import { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");

function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {

    if (username !== "" && room !== ""){
      socket.emit("join_room", room)
      setShowChat(true);
    }
  }

  return (
    
 <div className="outer_cont">
    
      <div className="App">
        {!showChat ? (
        <div className="joinChatContainer">
          <h2>Join a chat</h2>
          
          <input className="userName"
            type='text' 
            placeholder='Enter Username...' 
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input className="userName"
            type='text' 
            placeholder='Enter Room ID..' 
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button className="btn" onClick={joinRoom}>Join</button>
          
      </div>
      )
      : (
        <Chat socket={socket} username={username} room={room}/>
      )};
      
    

    </div>
    </div>
  );
}

export default App;

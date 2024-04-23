import { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");

function App() {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("")

  const joinRoom = () => {

    if (username !== "" && room !== ""){
      socket.emit("join_room", room)
    }
  }

  return (
    

    <div className="App">
        <h3>Join a chat</h3>
       <div className="container">
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
        <button class="btn" onClick={joinRoom}>Join</button>
        <Chat socket={socket} username={username} room={room}/>
    </div>
    </div>
  );
}

export default App;

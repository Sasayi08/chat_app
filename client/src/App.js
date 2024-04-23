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
        <input class="userName"
          type='text' 
          placeholder='Enter Username...' 
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <input class="userName"
          type='text' 
          placeholder='Enter Room ID..' 
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join</button>
        <Chat socket={socket} username={username} room={room}/>
    </div>
  );
}

export default App;

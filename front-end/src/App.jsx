import React, { useEffect } from 'react';
import './App.scss';
import Chat from './Chat/Chat';
import SideBar from './SideBar/SideBar';

function App() {

  useEffect(() => {
    const pusher = new Pusher('739310b287ee5fb66200', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])
  return (
    <div className="App">
      <div className="body">
        <SideBar />
        <Chat />
      </div>

    </div>
  );
}

export default App;

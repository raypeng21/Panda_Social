import './App.scss';
import Chat from './Chat/Chat';
import SideBar from './SideBar/SideBar';

function App() {
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

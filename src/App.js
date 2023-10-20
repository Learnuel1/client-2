import logo from './logo.svg';
import './App.css';
import {io} from "socket.io-client";
function App() {
  const socket = io();
  const user ={userId: "12sf7834uioioi53424", receiver: "87hjfgr453228"};
  socket.emit("lock", user);

  socket.on("notify", payload =>{
    console.log(payload);
  })
  
  const sendLocation = () => {
    user.location = "afam";
    console.log(user)
  socket.emit("location", user);
  }
  return (
    <>
    {/* <div className="App"> */}
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <div>

        <button className="btn"  onClick ={(e) =>sendLocation()}>
              send location
        </button>
    </div>

      {/* </div> */}
      </>
  );
}

export default App;

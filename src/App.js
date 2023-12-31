import logo from './logo.svg';
import './App.css';
import {io} from "socket.io-client";

function App() {
  const socket = io("https://smartmuvas.onrender.com/api/v1");
  const user ={userId: "12sf7834uioioi53424", receiver: "87hjfgr453228"};
  socket.emit("lock", user);

  socket.on("notify", payload =>{
    console.log(payload);
  })
  
  const sendLocation = () => {
    user.location = "afam";
    socket.emit("location", user);
    console.log(user)
  }
  return (
    <>
      <div>
        <button className="btn"  onClick ={(e) =>sendLocation()}>
              send location
        </button>
    </div>
      </>
  );
}

export default App;

import './App.css';
import background1 from './background/bg1.mp4';
import background2 from './background/bg2.mp4';
import background3 from './background/bg3.mp4';
import background4 from './background/bg4.mp4';
import background5 from './background/bg5.mp4';
import background6 from './background/bg6.mp4';
import React, { useState } from 'react';
function App() {

  const [currentBackground, setCurrentBackground] = useState(background1);
  const backgrounds = [background1, background2, background3, background4, background5, background6];
  const changeBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length); // Pick a random background
    setCurrentBackground(backgrounds[randomIndex]); // Set the new background
  };

  return (
    <>
      <Background currentBackground={currentBackground}/>
      <div id='container'>
        <LoginForm changeBackground={changeBackground}/>
      </div>
    </>
  );
}

function Background({ currentBackground }) {
  return (
    <div id='video_background'>
      <video key={currentBackground} autoPlay muted loop>
        <source src={currentBackground} type='video/mp4' />
      </video>
    </div>
  );
}

function LoginForm({ changeBackground }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) =>{
    event.preventDefault();
    setUsername('');
    setPassword('');
  };

  return (

    <div className='container'>
      <form class="glass-login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" placeholder="Email or Name" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button id='button1'>
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text">Login</span>
        </button>
        <br />
      </form>
      <button id='button2' onClick={changeBackground}>
          <span class="text">Change Background</span>
        </button>
    </div>

  );
}

export default App;

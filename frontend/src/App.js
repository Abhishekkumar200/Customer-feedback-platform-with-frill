import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
// import Signup from './components/Signup';
import Feedback from './components/Feedback';
import Dashboard from './components/Dashboard';
import UserState from './context/UserState';
import FeedbackState from './context/FeedbackState';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    <GoogleOAuthProvider clientId="415508792139-uu3mllb7d6ml5sikvjhn5e7apfri4ri2.apps.googleusercontent.com">
    <UserState>
    <FeedbackState>
    <BrowserRouter>
    <Navbar handleAlert={handleAlert}/>
    <Alert alert={alert}/>
    <div className='container'>
      <Routes>
        <Route exact path="/" element={<Home handleAlert={handleAlert}/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login handleAlert={handleAlert} />} />
        <Route exact path="/feedback" element={<Feedback handleAlert={handleAlert} />} />
        <Route exact path = "/dashboard" element = {<Dashboard/>} />
      </Routes>
      </div>
    </BrowserRouter>
    </FeedbackState>
    </UserState>
    </GoogleOAuthProvider>
    </>
  );
}

export default App;

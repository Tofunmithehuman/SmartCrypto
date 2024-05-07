import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Plan from './Pages/Plan';
import { Route, Routes } from 'react-router';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/plan" element={<Plan/>} />
      </Routes>
    </div>
  );
}

export default App;

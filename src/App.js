
import './App.css';
import './components/Register.css';
import './components/DogInfo.css';
import './components/Navbar.css';
import './components/Welcome.css';
import { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Register from './components/Register';
import DogInfo from './components/DogInfo';
import NavBar from './components/Navbar';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {
  const [dogs, setDogs] = useState([])

 
  const fetchData = async () => {

    const response = await fetch("https://api.jsonbin.io/b/6242d7f5fdd14a0f467a7fc9");
    const data = await response.json();
    console.log(data);
    setDogs(data)
  };
  useEffect(() => {
    fetchData()

  }, []);

  return (

    <div className="App">
      <header className="App-header">
        <h1 className='welcomeText'>K9 Hotel</h1>
      </header>
      
      <main className='mainScreen'>
        <Router>
        <NavBar/>
          
          <Routes>
            <Route exact path='/' element={<Welcome />} />
            <Route exact path='/register' element={<Register dogInfo={dogs} />} />
            <Route exact path='/dogInfo' element={<DogInfo dogInfo={dogs} />} />
            <Route exact path='/dogInfo/:chipNumber' element={<DogInfo dogInfo={dogs} />} />
          </Routes>
        </Router>

      </main>

    </div>
  );

}

export default App;

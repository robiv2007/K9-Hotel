
import './App.css';
import { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Register from './components/Register';
import DogInfo from './components/DogInfo';
import {HashRouter as Router,Route, Routes} from 'react-router-dom'

function App() {
  const [dogs,setDogs] = useState([])
  const [currentDog, setCurrentDog] = useState([]);
  const fetchData = async () => {
      
    const response = await fetch("https://api.jsonbin.io/b/6242d7f5fdd14a0f467a7fc9");
      const data = await response.json();
      console.log(data);  
      setDogs(data)
    };
    useEffect(() => {
      fetchData()
      
     },[]);

  return (
    <div className="App">
      <header className="App-header">
       <h1 className='welcomeText'>K9 Hotel</h1>
       
      
      </header>
      <main className='mainScreen'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Welcome/>}/>
            <Route exact path='/register' element={<Register dogInfo={dogs} setCurrentDog = {setCurrentDog}/>}/>
            <Route path='/register/:currentdog' element={<Register dogInfo={dogs} setCurrentDog = {setCurrentDog}/>}/>
            <Route exact path='/dogInfo' element={<DogInfo currentDog={currentDog}/>}/>           
          </Routes> 
        </Router>
     
      </main>
     
    </div>
  );
}

export default App;

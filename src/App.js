
import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Register from './components/Register';
import DogInfo from './components/DogInfo';





function App() {

  const WELCOME = 'welcome', REGISTER ='register', DOGINFO ='dogInfo'
  const [currentScreen, setCurrentScreen] = useState(WELCOME)

  let content = null;

  content = <Register />

  switch(currentScreen) {
    case WELCOME : 
      content = <Welcome nextScreen={() => setCurrentScreen(REGISTER)} />
      break;

    case REGISTER :
      content = <Register />
      break;

      default:
      content = <DogInfo />
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1 className='welcomeText'>K9 Hotel</h1>
      </header>
      <main className='mainScreen'>
        {content}
     
      </main>
     
    </div>
  );
}



export default App;

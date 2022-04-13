import { Link } from 'react-router-dom';
import bone from './bone.png'
import logo from './logo.png';


const Welcome = () => {

   return (
      <div>
         <div className='welcomeSection'>
            <img src={logo} className="App-logo" alt="logo" />
         </div>
         <div className='buttonDiv'>
            <Link to='/register'>
               <img className='boneButton' src={bone}></img>
            </Link>
         </div>
      </div>

   )
}

export default Welcome;
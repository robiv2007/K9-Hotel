import { Link } from 'react-router-dom';
import bone from './bone.png'
import logo from './logo.png';


const Welcome = () => {

   return (
      <section>
         <img src={logo} className="App-logo" alt="logo" />
         <br />
         <Link to='/register'>
            <img className='boneButton' src={bone}></img>
         </Link>

      </section>

   )
}

export default Welcome;
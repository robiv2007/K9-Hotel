import { Link } from 'react-router-dom';
import bone from './Images/bone.png';
import cube2 from './Images/cube2.png'
import cube3 from './Images/cube3.jpg'
import cube1 from './Images/cube1.png'



const Welcome = () => {

   return (
      <div className='welcomeSection'>
         <div className='wrapper'>
            <div className='cubeContainer'>
               <div className='cube'>
                  <div className='front'>
                     <img className="pic" src={cube2} />
                  </div>
                  <div className='right'>
                     <img className='pic' src={cube3} />
                  </div>
                  <div className='back'>
                     <img className='pic' src={cube1} />
                  </div>
                  <div className='left'>
                     <img className='pic' src={cube3} />
                  </div>
               </div>
              
            </div>
            
         </div>
         <br />
         <div className='buttonDiv'>
                  <Link to='/register'>
                     <img className='boneButton' src={bone}></img>
                  </Link>
               </div>

      </div>
   )
}

export default Welcome;
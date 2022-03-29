import bone from './bone.png'
import logo from './logo.png';


 const Welcome = ({nextScreen}) => {

    return(
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <img className ='boneButton'src={bone} onClick={nextScreen}></img>
            </section>
          
    )
 }

 export default Welcome;
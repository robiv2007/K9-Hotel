import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Register = ({dogInfo,setCurrentDog}) => {
  console.log("DOG INFO",dogInfo)

  //const params = useParams();
  
  // let currentdog = dogInfo
  // if ('currentdog' in params){
  //   if(params.currentdog == currentdog){
  //     currentdog = dogInfo.name
  //   }

  // }

    return(
        <section>
        <h1>REGISTER</h1>
        <div className="registerList">
          
        {dogInfo.map((dog) => (
              <li key={dog.chipNumber} > 
              
                <h1>name: {dog.name}</h1>
                <h2> age: {dog.age}</h2>
                <Link to='/dogInfo' onClick={()=> setCurrentDog(dog)}>
                <img src={dog.img} className="dogImage"></img>
                </Link>
               
              </li> 
        ))}
        </div>
        </section>      
    ) 
 }

 

 export default Register;

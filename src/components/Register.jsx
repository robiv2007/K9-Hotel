import { useState } from "react";
import { useEffect } from "react";
import { createSearchParams, Link, useParams, useNavigate } from "react-router-dom";

const Register = ({ dogInfo }) => {
  console.log("REGISTER DOG INFO", dogInfo)

  const [dogsIn, setDogsIn] = useState(false)

  let dogsList = null
  if (dogInfo !== null) {
    dogsList = (
      <div>
        <div className="registerTitleDiv">
          <h1 className="registerTitle">REGISTER</h1>
        </div>
        <div className="divStatusButton">
          <button className="statusButton" onClick={changeStatus}>Show Dogs In</button>
        </div>
        <div className="registerList">

          {dogInfo.map((dog) => (

            <li key={dog.chipNumber} className="card" >
              <Link className="link" to={`/dogInfo/${dog.chipNumber}`} >
                <img src={dog.img} className="dogImage"></img>
                <div className="container">
                  <h1 className="dogName">{dog.name}</h1>
                  <div> {dog.present ?
                    (<h1 className="dogIn">Dog In</h1>) :
                    (<h1 className="dogOut">Not In</h1>)
                  }
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </div>

      </div>
    )
  }
  let inDogsList = null
  if (dogInfo !== null) {
    inDogsList = (
      <div>
        <div className="registerTitleDiv">
          <h1 className="registerTitle">REGISTER</h1>
        </div>

        <div className="divStatusButton">

          <button className="statusButton" onClick={changeStatus}>Show All Dogs</button>
        </div>

        <div className="registerList">
          {dogInfo.filter(dogPresent => dogPresent.present == true).map(dog => (

            <li key={dog.chipNumber} className="card" >
              <Link className="link" to={{ pathname: '/dogInfo/' + dog.chipNumber }} dog='dog'>
                <img src={dog.img} className="dogImage"></img>
                <div className="container">
                  <h1 className="dogName">{dog.name}</h1>
                  <h1 className="dogIn">Dog In</h1>

                </div>
              </Link>
            </li>
          ))}
        </div>
      </div>
    )
  }
  return (
    dogsIn ? (
      <div>
        {inDogsList}
      </div>
    ) :
      (
        <div>
          {dogsList}
        </div>
      )
  )

  function changeStatus() {
    setDogsIn(true)
    if (dogsIn == true) {
      setDogsIn(false)
    } else {
      setDogsIn(true)
    }
    console.log("Dogs IN", dogsIn)
  }
}

export default Register;


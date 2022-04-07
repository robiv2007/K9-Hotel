import { useState } from "react";
import { useEffect } from "react";
import { createSearchParams, Link, useParams, useNavigate } from "react-router-dom";

const Register = ({ dogInfo }) => {
  console.log("DOG INFO", dogInfo)

  return (
    <section>
      <h1>REGISTER</h1>
      <div className="registerList">

        {dogInfo.map((dog) => (
          <li key={dog.chipNumber} className="card" >
            <Link className="link" to={{ pathname: '/dogInfo/' + dog.chipNumber }} dog='dog'>
              <img src={dog.img} className="dogImage"></img>
              <div className="container">
                <h1>name: {dog.name}</h1>
                <div> {dog.present ?
                  (<h1 style={{ color: "green" }}>Dog In</h1>) :
                  (<h1 style={{ color: "red" }}>Not In</h1>)
                }
                </div>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </section>
  )
}

export default Register;

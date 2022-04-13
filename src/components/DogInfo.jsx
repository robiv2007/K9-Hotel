
import { Link, useNavigate, useParams } from "react-router-dom";

const DogInfo = ({ dogInfo }) => {
    console.log(" DOG INFO ", dogInfo)

    //let navigate = useNavigate()
    const params = useParams()
    let dog1 = null

    dogInfo.forEach(dog => {
        if (params.chipNumber === dog.chipNumber) {
            //console.log('dogChip', dog.chipNumber)
            dog1 = dog

        }
    });
    let dogElement = null;
    if (dog1 !== null) {
        dogElement = (
            <div className="divAllInfo">
                <div className="dogProfilePic">
                    <img src={dog1.img} ></img>
                </div>
                <div className="dogData" >

                    <h1> Name: {dog1.name}</h1>
                    <h2> Age:  {dog1.age}</h2>
                    <h2> Sex:  {dog1.sex}</h2>
                    <h2> Breed: {dog1.breed}</h2>
                    <h2> Chip Number : {dog1.chipNumber}</h2>
                    <h1> Owner Name : {dog1.owner.name + " " +dog1.owner.lastName}</h1>
                    <h1> Tel : {dog1.owner.phoneNumber}</h1>
                </div>
            </div>
        )
    }
    //console.log('Current dog value', dog) 
    return (
        <div className="dogInfo">
            {dogElement}
        </div>
    )
}



export default DogInfo;

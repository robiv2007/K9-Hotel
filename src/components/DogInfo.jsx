
import { Link, useNavigate, useParams } from "react-router-dom";

const DogInfo = ({ dogInfo }) => {


    let navigate = useNavigate()
    const params = useParams()
    let currentDogInfo = null
    console.log("Params", params.chipNumber)
    console.log("dog info ", dogInfo)
    dogInfo.forEach(dog => {
        if (params.chipNumber == dog.chipNumber) {
            console.log('dogChip', dog.chipNumber)
            currentDogInfo = dog
        }
    });

    console.log('Current dog value', currentDogInfo)
    return (
        <section>
            <div>
                <img src={currentDogInfo.img} className="dogProfile"></img>
            </div>
            <div>
                <h1> Name: {currentDogInfo.name}</h1>
                <h1> Age:  {currentDogInfo.age}</h1>
                <h1> Breed: {currentDogInfo.breed}</h1>
                <h1> Chip Number : {currentDogInfo.chipNumber}</h1>
                <h1> Owner Name : {currentDogInfo.owner.name}</h1>
                <h1> Owner Last Name : {currentDogInfo.owner.lastName}</h1>
                <h1> Phone number : {currentDogInfo.owner.phoneNumber}</h1>
            </div>

        </section>
    )
}



export default DogInfo;

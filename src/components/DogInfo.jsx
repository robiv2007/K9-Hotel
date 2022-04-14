
import { useParams } from "react-router-dom";

const DogInfo = ({ dogInfo }) => {
    console.log(" DOG INFO ", dogInfo)


    const params = useParams()
    let dog1 = null

    dogInfo.forEach(dog => {
        if (params.chipNumber === dog.chipNumber) {
            dog1 = dog

        }
    });
    let dogElement = null;
    if (dog1 !== null) {
        dogElement = (
            <div className="divAllInfo">
                <div >
                    <img className="dogProfilePic" src={dog1.img} ></img>
                </div>
                <div className="dogData" >
                    <h1> {dog1.name}</h1>
                    <h2> Age:  {dog1.age}</h2>
                    <h2> Sex:  {dog1.sex}</h2>
                    <h2> Breed: {dog1.breed}</h2>
                    <h2> Chip Number : {dog1.chipNumber}</h2>
                    <h1> Owner : {dog1.owner.name + " " + dog1.owner.lastName}</h1>
                    <h1> Tel : {dog1.owner.phoneNumber}</h1>
                </div>
            </div>
        )
    }
    return (
        <div className="dogInfo">
            {dogElement}
        </div>
    )
}

export default DogInfo;

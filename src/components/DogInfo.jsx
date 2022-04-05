const DogInfo = (currentDog) => {
    
   
     console.log('DOG VALUE',currentDog)
     //console.log(currentDog.owner.name)
     
    return(
        <section>
            <div>
               
                <img src={currentDog.currentDog.img} className="dogProfile"></img>
          
            </div>
            <div>
            <h1> Name: {currentDog.currentDog.name}</h1>
            <h1> Age:  {currentDog.currentDog.age}</h1>
            <h1> Breed: {currentDog.currentDog.breed}</h1>
            <h1> Chip Number : {currentDog.currentDog.chipNumber}</h1>
            <h1> Owner Name : {currentDog.currentDog.owner.name}</h1>
            <h1> Owner Last Name : {currentDog.currentDog.owner.lastName}</h1>
            <h1> Phone number : {currentDog.currentDog.owner.phoneNumber}</h1>
            

            </div>
           
            </section>
    )
}
    

 export default DogInfo;
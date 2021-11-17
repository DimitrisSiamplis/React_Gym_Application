
import './AddNewCostumer.css'
import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

const AddNewCostumer = () => {
    let history = useHistory();
    
    // ---------------------- DEFINE ALL HOOKS ------------------------------- 
    const [enteredName , setEnteredName]  = useState('')
    const [enteredPhone , setEnteredPhone]  = useState('')
    const [enteredEmail , setEnteredEmail]  = useState('')
    const [enteredBirthday , setEnteredBirthday]  = useState('')
    const [enteredGender , setEnteredGender]  = useState('')
    const [enteredTrainingAge , setEnteredTrainingAge]  = useState('')
    const [enteredWeight , setEnteredWeight]  = useState('')
    const [enteredHeight , setEnteredHeight]  = useState('')
    const [enteredLooseWeight , setEnteredLooseWeight]  = useState('')
    const [enteredMuscleGain , setEnteredMuscleGain]  = useState('')
    const [enteredHealthierLife , setEnteredHealthierLife]  = useState('')

    const [isValid , setIsValid] = useState(true);
    const [isValidPhone , setIsValidPhone ] = useState(true);


    // ------------------- INPUT HANDLERS --------------------------------------

    const userNameHandler = (event) =>{

        setEnteredName(event.target.value);

    
        
    } 

    const phoneHandler = (event) =>{
        setEnteredPhone(event.target.value)
        
        if(enteredPhone[0] !== '6')
        {
            setIsValid(false);
        }
        else if(enteredPhone[1] !== '9')
        {
            setIsValid(false);
        }
        else{
            setIsValid(true);
        }
    }

    const emailHandler = (event) =>{
        setEnteredEmail(event.target.value)
    }

    const birthdayHandler = (event) =>{
        setEnteredBirthday(event.target.value)
    }

    const genderHandler = (event) =>{
        setEnteredGender(event.target.value)
    }

    const TrainingAgeHandler = (event) =>{
        setEnteredTrainingAge(event.target.value)
    }

    const WeightHandler = (event) =>{
        setEnteredWeight(event.target.value)
    }

    const HeihtHandler = (event) =>{
        setEnteredHeight(event.target.value)
    }

    const LooseWeightHandler = (event) =>{
        setEnteredLooseWeight(event.target.value)
    }

    const MuscleGainHandler = (event) =>{
        setEnteredMuscleGain(event.target.value)
    }

    const HealthierLifeHandler = (event) =>{
        setEnteredHealthierLife(event.target.value)
    }
    

    
    // ---------------  SUBMIT NEW COSTUMER ------------------------------------

    const submitCostumerHander = (event) => {
        event.preventDefault();

        console.log(enteredName ,enteredPhone,  enteredEmail ,enteredBirthday , enteredGender , enteredTrainingAge , enteredWeight , enteredHeight , enteredLooseWeight , enteredMuscleGain , enteredHealthierLife )
        const date = new Date().toISOString().slice(0, 10) ;

        if(isValid)
        {
            fetch('https://gym-proect-default-rtdb.firebaseio.com/Data.json' , {
                method: 'POST' ,
                body: JSON.stringify( { 
                    Name: enteredName , 
                    Phone: enteredPhone,
                    Email: enteredEmail,
                    Birthday: enteredBirthday ,
                    Gender: enteredGender ,
                    TrainingAge: enteredTrainingAge ,
                    Weight: enteredWeight ,
                    Height: enteredHeight ,
                    LooseWeight: enteredLooseWeight ,
                    MuscleGain: enteredMuscleGain ,
                    HealthierLife: enteredHealthierLife,
                    Date: date
                })
            })
            
        
            setEnteredName('');
            setEnteredPhone('');
            setEnteredEmail('');
            setEnteredBirthday('');
            setEnteredGender('');
            setEnteredTrainingAge('');
            setEnteredWeight('');
            setEnteredHeight('');
            setEnteredLooseWeight('');
            setEnteredMuscleGain('');
            setEnteredHealthierLife('');

            alert("Costumer Added Succesfully");
            history.push("/show-costumers");

        }
        else{
            alert('Warning Please try again!')
            window.location.reload();
            
        }

        
    }





    return (
        <div className = 'akala'>
            <h2> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Add Costumer Form</h2>
            <p>Please entered the follow input to add a Costumer in your database.</p>
            <form onSubmit = {submitCostumerHander}>

                <div >
                    <div >
                        <label >UserName</label>
                        
                    </div>
                    <div>
                        <input minLength='5' value = {enteredName} onChange = {userNameHandler} type="text" placeholder="Your name.."/>
                         
                    </div>
                </div>

                <div >
                    <div >
                        <label >Phone Number</label>
                    </div>
                    <div >
                        <input maxLength='10' minLength='10'  value = {enteredPhone} onChange = {phoneHandler} type="text"  placeholder="Your phone number.."/>
                        {!isValid && <p style={{ color: 'red'}}>Wrong Phone (69...)</p>}
                    </div>
                </div>

                <div >
                    <div >
                        <label >Email address</label>
                    </div>
                    <div >
                        <input value = {enteredEmail} onChange = {emailHandler} type="email"  placeholder="Your email address.."/>
                    </div>
                </div>

                <div >
                    <div >
                        <label >Birthday</label>
                    </div>
                    <div >
                        <input value = {enteredBirthday} onChange = {birthdayHandler} type="date"/>
                    </div>
                </div>

                <div >
                    <div >
                        <label>Gender</label>
                    </div>
                    <div >
                        <select  required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            
                        </select>
                    </div>
                </div>

                <div >
                    <div >
                        <label >Training Age</label>
                    </div>
                    <div >
                        <input value = {enteredTrainingAge} onChange = {TrainingAgeHandler} type="number"placeholder="Your training age.." />
                    </div>
                </div>

                <div >
                    <div >
                        <label >Weight in Kilos</label>
                    </div>
                    <div >
                        <input value = {enteredWeight} onChange = {WeightHandler} type="number" placeholder="Your weight.." />
                    </div>
                </div>

                <div >
                    <div >
                        <label value = {enteredHeight} onChange = {HeihtHandler} >Height in cm</label>
                    </div>
                    <div >
                        <input type="number" placeholder="Your Height.." />
                    </div>
                </div>

                <div >
                    <div >
                        <label >Loose Weight in Kilos</label>
                    </div>
                    <div >
                        <input value = {enteredLooseWeight} onChange = {LooseWeightHandler} type="number" placeholder="Your loose weight.." />
                    </div>
                </div>

                <div >
                    <div >
                        <label >Muscle Gain in Kilos</label>
                    </div>
                    <div >
                        <input value = {enteredMuscleGain}  onChange = {MuscleGainHandler} type="number" placeholder="Your Muscle gain.." />
                    </div>
                </div>

                <div >
                    <div >
                        <label >Healthier Life</label>
                    </div>
                    <div >
                        <input value = {enteredHealthierLife} onChange = {HealthierLifeHandler}  type="number" min='0' max='10' placeholder="Your Healthier Life.." />
                    </div>
                </div>






                




                <br/> <br/> <br/> <br/>

                <div >
                    <input type="submit" value="Add Costumer"/>
                </div>
            </form>


        </div>
    )
}

export default AddNewCostumer

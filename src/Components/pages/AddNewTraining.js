import React from 'react'
import './AddNewCostumer.css'
import { useState } from 'react'
import { useHistory } from "react-router-dom";


const AddNewTraining = () => {

    
    
    // ---------------------------- DEFINE HOOKS --------------------------------------
    const [enteredPlace, setEnteredPlace] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredStatus, setEnteredStatus] = useState('');
    const [enteredDuration, setEnteredSDuration] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    const [isValidPhone , setIsValidPhone ] = useState(true);

    let history = useHistory();
    // ------------------- INPUT HANDLERS --------------------------------------
    const placeHandler  = (event) => {
        setEnteredPlace(event.target.value);

    }

    const dateHandler  = (event) => {
        setEnteredDate(event.target.value);
        
    }

    const timeHandler  = (event) => {
        setEnteredTime(event.target.value);
        
    }
    const statusHandler  = (event) => {

        setEnteredStatus(event.target.value);
    }
    const durationHandler  = (event) => {

        setEnteredSDuration(event.target.value);
    }




    // --------------------------- SUBMIT NEW TRAIN ---------------------------------------

    const submitHandler = (event) =>{
        event.preventDefault();

        console.log( enteredPlace ,enteredTime , enteredStatus ,  enteredDuration );

        fetch('https://gym-proect-default-rtdb.firebaseio.com/Training.json' , {
            method: 'POST' ,
            body: JSON.stringify( { 
                Place: enteredPlace ,
                Time: enteredTime , 
                Date: enteredDate,
                Status: enteredStatus ,
                Duration: enteredDuration

            })
        })

        setEnteredPlace('');
        setEnteredTime('');
        setEnteredStatus('')
        setEnteredSDuration('');



    
        alert('Training Added Succesfully');
        history.push("/show-trainings");

    }



    return (
        <div className = 'akala'>
            <h2> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Add Training Form</h2>
            <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Please entered the follow input to add a Training in your database.</p>
            <br/>
            <form onSubmit = {submitHandler}>

                <div >
                    <div >
                        <label >Place</label>
                    </div>
                    <div>
                        <input minLength='4' onChange = {placeHandler} value = {enteredPlace}  type="text" placeholder="Place Name.."/>
                    </div>
                </div>
                
                <div >
                    <div >
                        <label >Date </label>
                    </div>
                    <div>
                        <input  onChange = {dateHandler} value = {enteredDate}  type="date" placeholder="Place Name.."/>
                    </div>
                </div>

                <div >
                    <div >
                        <label >Time </label>
                    </div>
                    <div>
                        <input  onChange = {timeHandler} value = {enteredTime}  type="time" placeholder="Place Name.."/>
                    </div>
                </div>

                <div >
                    <div >
                        <label >Status</label>
                    </div>
                    <div>
                        <input min='10' max='120' onChange = {statusHandler} value={enteredStatus} type="text" placeholder="Place Name.."/>
                    </div>
                </div>

                <div >
                    <div >
                        <label >Duration (in minutes)</label>
                    </div>
                    <div>
                        <input onChange = {durationHandler} value = {enteredDuration} type="number" placeholder="Place Name.."/>
                    </div>
                </div>


                <br/> <br/> <br/> <br/>

                <div >
                    <input type="submit" value="Add Train"/>
                </div>
            </form>


        </div>
    )
}

export default AddNewTraining


import { useState } from 'react';
import React from 'react'
import {useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const EditList = (props) => {
    const [enteredPlace, setEnteredPlace] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredStatus, setEnteredStatus] = useState('');
    const [enteredDuration, setEnteredSDuration] = useState('');
    const [enteredDate , setEnteredDate] = useState('');

    let history = useHistory();
    

    const {id} = useParams();
    
  

    


    let train = [];
    props.tasks.forEach(element => {
        
        train.push(element.place)
        
    });
  
    props.tasks.forEach(element => {
        
        train.push(element.status)

    });

    props.tasks.forEach(element => {
        
        train.push(element.time)

    });
    
    props.tasks.forEach(element => {
        
        train.push(element.duration)

    });

    props.tasks.forEach(element => {
        
        train.push(element.date)

    });

    train = train.filter(function( element ) {
        return element !== undefined;
     });
    
    console.log(train[0])
    

    


    const placehandler = (event) => {
        setEnteredPlace(event.target.value)
    }

    const timehandler = (event) => {
        setEnteredTime(event.target.value)
    }
    const statushandler = (event) => {
        setEnteredStatus(event.target.value)
    }

    const durationhandler = (event) => {
        setEnteredSDuration(event.target.value)
    }


    const datehandler = (event) => {
        setEnteredDate(event.target.value)
    }


    const editTrainingSubmit = (event) => {
        event.preventDefault();
        console.log( enteredPlace ,enteredTime , enteredStatus ,  enteredDuration , enteredDate );

        
        fetch('https://gym-proect-default-rtdb.firebaseio.com/Training/'+id+'.json' , {
            method: 'PUT' ,
            body: JSON.stringify( { 
                Place: enteredPlace ,
                Time: enteredTime , 
                Date: enteredDate,
                Status: enteredStatus ,
                Duration: enteredDuration

            })
        })
        


        setEnteredPlace('')
        setEnteredTime('')
        setEnteredStatus('')
        setEnteredSDuration('')
        setEnteredDate('')

        alert('Finished Editing')
        history.push("/show-trainings");
    }
    
    

    

    return (
        <div>
            <form onSubmit = {editTrainingSubmit}> 
                <h2>Edit your Training</h2>
                <div >
                    <div >
                        <label >Change Place</label>
                    </div>
                    <div>
                        <input value = {enteredPlace} onChange={placehandler}  type="text" placeholder={train[0]} required />
                    </div>
                </div>

                <div >
                    <div >
                        <label >Change Status</label>
                    </div>
                    <div>
                        <input value = {enteredStatus} onChange={statushandler}  type="text" placeholder={train[1]} required />
                    </div>
                </div>

                <div >
                    <div >
                        <label >Change Time</label>
                    </div>
                    <div>
                        <input value = {enteredTime} onChange={timehandler}  type="time" placeholder={train[2]} required />
                    </div>
                </div>

                <div >
                    <div >
                        <label >Duration</label>
                    </div>
                    <div>
                        <input value = {enteredDuration}  onChange={durationhandler} type="number" placeholder={train[3]} required />
                    </div>
                </div>

                <div >
                    <div >
                        <label >Date</label>
                    </div>
                    <div>
                        <input value = {enteredDate}  onChange={datehandler} type="date" placeholder={train[4]} required />
                    </div>
                </div>

                <br/> <br/> <br/> <br/>

                <div >
                    <input type="submit" value="Edit Train"/>
                </div>
                

            </form>
            

    
            
            
        
        </div>
    )
}

export default EditList

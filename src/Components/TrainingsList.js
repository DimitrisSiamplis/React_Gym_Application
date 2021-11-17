
import './CostumerList.css' ;
import React from 'react'
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const TrainingsList = (props) => {
    let history = useHistory();
    let testArray = [];


    const [place , setPlace ] = useState('');
    const [isToggle , setIsToogle] = useState(false)
    const [checkBoxState, setcheckBoxState] = useState([]);


    const deleteTrainingHandler = (id) => {

        
        const  fetchTrainings = async () => {

            const response = fetch('https://gym-proect-default-rtdb.firebaseio.com/Training/' +id+ '.json', {
                method: 'DELETE',
                })
                .then()

            const responseData = await response.json();

        }

        fetchTrainings();

         
            
        alert('Clck ok to Continue with Delete');

            
        window.location.reload();    
    }

    const editButton = (id) => {
        console.log(id)
        history.push(`/edit/${id}`);
    }

    
    const clickPlace = (event) => {
        console.log('Placed Changed')
        setPlace(event.target.value);
    } 

    const changePlace = ( place , k) => {
        console.log(place , k);
        console.log(";fk;")
        console.log(k)
        setPlace(place);
        setIsToogle(true);

    }
    
    console.log(props.tasks.length)

    

    for (let i = 0; i < props.tasks.length; i++) {
        
        testArray[i] = false;
    }


   let k = 0;

    return (
        <div>
            
            {props.tasks.map( (task ) => (
                
               
                
                <div className='card' key = {task.id}> 
                    <div >
            
                      { ( !isToggle && !testArray[k] ) ? ( <h1 onClick={ () => {changePlace(task.place , k )}  } >{task.place}</h1> ) : <input onChange={clickPlace} value = {place}   ></input> } 
                    
                        <p className='title'>{task.status}</p>
                        <p>{task.time}</p>
                        <p>{task.date}</p>
                        <p>{task.id}</p>

                        <p><button onClick={ () => deleteTrainingHandler(task.id) } className='buton'>Delete Training</button></p>
                        <p><button onClick={ () => editButton(task.id) } className='buton'>Edit</button></p>
                        
                        
                    </div> 
                    
                    <br/><br/>
                </div> 


           
            
                
            ))}
            
        
        </div>
    )
}

export default TrainingsList

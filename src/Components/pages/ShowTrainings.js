import React from 'react'
import { useEffect , useState } from 'react'
import './ShowTrainings.css'
import TrainingsList from '../TrainingsList';


const ShowTrainings = () => {
    const [trainings, setTrainings] = useState([]);


    useEffect( () => {
        
        const  fetchTrainings = async () => {

            const response = await fetch('https://gym-proect-default-rtdb.firebaseio.com/Training.json' ).then(  )

            const responseData = await response.json();

            const loadTrainings = [] ;

            for(const key in responseData) {
                loadTrainings.push( { 
                    id: key,
                    place: responseData[key].Place,
                    status:  responseData[key].Status,
                    time:  responseData[key].Time,
                    date:  responseData[key].Date,
                    status:  responseData[key].Status
                })
            }

            setTrainings(loadTrainings);

        }
        
        fetchTrainings();
        
        
    } , [])


    return (
        <div>
            <h2 className='some'>Your Training Program</h2> <br/>
            <TrainingsList tasks = {trainings} />
            
        </div>
    )
}

export default ShowTrainings

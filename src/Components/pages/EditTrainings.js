
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState  , useEffect} from 'react';
import TrainingsList from '../TrainingsList';
import EditList from '../EditList';

const EditTrainings = (props) => {

    let {id} = useParams();
    const [training, setTraining] = useState([]);


    useEffect( () => {
        
        const  fetchTraining = async () => {

            const response = await fetch('https://gym-proect-default-rtdb.firebaseio.com/Training/' +id+ '.json' ).then(  )

            const responseData = await response.json();
            console.log("responseData")
            console.log(responseData.Place);

            const loadTraining = [] ;

           loadTraining.push( {
               place: responseData.Place
           })

           loadTraining.push( {
                duration: responseData.Duration
            })

            loadTraining.push( {
                time: responseData.Time
            })

            loadTraining.push( {
                status: responseData.Status
            })

            loadTraining.push( {
                date: responseData.Date
            })

            loadTraining.push( {
                id: id
            })


            setTraining(loadTraining);

        }
        
        fetchTraining();
        
        
    } , [])

    console.log('SETTRAINING')
    console.log(training)



    
    



    return (
        <div>
            
            <EditList tasks = {training} />
            
        </div>
    )
}

export default EditTrainings

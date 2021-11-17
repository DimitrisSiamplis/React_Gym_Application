import React from 'react'
import { useEffect , useState } from 'react'
import CostumerList from '../CostumerList';


const ShowCostumers = () => {

    const [costumers, setCostumers] = useState([]);

    useEffect( () => {
        const  fetchCostumers = async () => {

            const response = await fetch('https://gym-proect-default-rtdb.firebaseio.com/Data.json' ).then(  )

            const responseData = await response.json();

            const loadCostumers = [] ;

            for(const key in responseData) {
                loadCostumers.push( { 
                    id: key,
                    name: responseData[key].Name ,
                    phone: responseData[key].Phone,
                    email :responseData[key].Email,
                    birthday: responseData[key].Birthday ,
                    gender : responseData[key].Gender ,
                    trainingAge: responseData[key].TrainingAge ,
                    weight: responseData[key].Weight ,
                    height: responseData[key].Height ,
                    looseWeight: responseData[key].LooseWeight ,
                    muscleGain: responseData[key].MuscleGain ,
                    healthierLife: responseData[key].HealthierLife,
                    date: responseData[key].Date
                    
                })
            }

            setCostumers(loadCostumers);

        }
        
        fetchCostumers();
        console.log("kjhvjh")
        
    } , [])
    console.log(costumers);
    return (
        <div>
            <CostumerList tasks = {costumers} />
        </div>
    )
}

export default ShowCostumers

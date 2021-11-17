import React from 'react' ;
import './CostumerList.css' ;



const CostumerList = (props) => {
    
    

    const deleteCostumerHandler = (id) => {

        
        


        const  fetchCostumers = async () => {

            const response = fetch('https://gym-proect-default-rtdb.firebaseio.com/Data/' +id+ '.json', {
                method: 'DELETE',
                })
                .then()

            const responseData = await response.json();

        }

        fetchCostumers();

         
            
        alert('Clck ok to Continue with Delete');

            
        window.location.reload();    
    }


    return (
        <div>
            
            {props.tasks.map( (task) => (

                <div className='card' key = {task.id}> 
                    <div >
            
                        <h1>{task.name}</h1>
                        <p className='title'>{task.phone}</p>
                        <p>{task.email}</p>
                        <p>{task.birthday}</p>
                        <p>{task.weight} in kilos</p>
                        <p>{task.gender}</p>
                        <p>Register Date: {task.date}</p>
                        
                        
                        <p><button onClick={ () => deleteCostumerHandler(task.id) } className='buton'>Delete Costumer</button></p>
                        
                    </div>
                    <br/><br/>
                </div>


           
            
    
            ))}
            
        
        </div>
    )
}

export default CostumerList

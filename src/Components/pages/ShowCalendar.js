import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState , useEffect } from 'react';
import TrainingsList from '../TrainingsList';

import './Calendar.css'

const ShowCalendar = () => {

    const [date,setDate] = useState(new Date());
    const [trainings, setTrainings] = useState([]);
    const [newTrainings, setNewTrainings] = useState([]);
    const [titleContent,setTitleContent] = useState( [] );

    const newtrainings = [];
    const loadTrainings = [] ;
    const dates = [];
    const dates1 = [];
    const dates3 = [];

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    

    
    
    useEffect( () => {
        
        const  fetchTrainings = async () => {

            const response = await fetch('https://gym-proect-default-rtdb.firebaseio.com/Training.json' ).then(  )

            const responseData = await response.json();

            

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

            

            for (let i = 0; i < loadTrainings.length; i++) {
                
                dates.push(formatDate(loadTrainings[i].date).slice(8,10))
            }
            
            for (let i = 0; i < loadTrainings.length; i++) {
                
                dates1.push(formatDate(loadTrainings[i].date).slice(0,4))
            }

            for (let i = 0; i < loadTrainings.length; i++) {
                
                dates3.push(formatDate(loadTrainings[i].date).slice(5,7))
            }
            console.log(dates3)


            //=--------------------
            const counter = [];
            for (let i = 0; i < dates.length; i++) {
                counter[i] = 0;
                
            }

            for (let i = 0; i < dates.length; i++) {
                for (let j = 0; j < dates.length; j++) {
                    
                    if(dates[i] === dates[j] && i!==j )
                    {
                        counter[i] = counter[i]+1;
                    }
                    
                }
                
            }

            // ----------------------------

            setTitleContent( () => ({date , view}) => { 

                for (let i = 0; i < dates.length; i++) {
                   
                    if(date.getDate() == dates[i] && date.getFullYear() == dates1[i] && date.getMonth() == dates3[i]-1 )
                    {   
                        counter[i] = counter[i]+1;
                        return (<p>{counter[i]} trainings</p>)
                    }
                    
                }
                

            }  )
            
            

        }
        
        fetchTrainings();
        
        
    } , [])

    

    


    const doSomething = (value,event) => {
        
        let cnt = 0;

        for(const key in trainings)
        {
            if(formatDate(trainings[key].date) === formatDate(value) )
            {
                console.log('The same Dates')
                newtrainings.push( { 
                    id: trainings[key].id,
                    place: trainings[key].place,
                    status:  trainings[key].status,
                    time:  trainings[key].time,
                    date:  trainings[key].date,
                    status:  trainings[key].status
                })
                cnt++;
            }
            
        }

        if(cnt === 0)
        {
            alert(`There not trainings at ${formatDate(value)}.  Try again.`)
        }
        
        
        setNewTrainings(newtrainings)
        

    }

    
    


    return (
        <div>
            <Calendar className = 'calendar'  value={date} onClickDay = {(value, event ) => doSomething(value,event) }   tileContent = {titleContent}  />
            <TrainingsList tasks = {newTrainings} />
           
        </div>
    )

    
}

export default ShowCalendar

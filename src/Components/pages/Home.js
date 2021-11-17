import React from 'react'
import './Home.css'
import { useState } from 'react'

const Home = () => {

    

    const imageURL = [
        "https://www.greeka.com/photos/greece-sports/gym/hero/greece-sports-gym-1920.jpg" ,
        "https://images.luxuryhotel.guru/hotelimage.php?p_id=2943206&code=d1b7eb5bb45367ad345e47d55629b320&webpage=hotels-with-gym.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F207323194.jpg%3Fk%3D6c8d8041222d3aea6482b2a1de154374dc0c9febb5ac2d290aea0b83d8062146%26o%3D" , 
        "https://complete-physio.co.uk/wp-content/uploads/2020/06/7-tips-for-a-successful-return-to-the-gym-after-lockdown-1.jpg"
    ]

    const [imageActive , setImageActive] = useState(imageURL[0]);

    const next = () => {
        

        let key = [];

        for (let i = 0; i < imageURL.length; i++) {


            if(imageURL[i] === imageActive)
            {
                
                if(i=== imageURL.length-1)
                {
                    key[0] = 0;
                }
                else{
                    key[0] = i+1;
                    
                }

                
                
            }
            
        }
        
        

        setImageActive(imageURL[key]);
        
    }

    const prev = () => {
        
        let key = [];

        for (let i = 0; i < imageURL.length; i++) {


            if(imageURL[i] === imageActive)
            {
                
                if(i=== 0)
                {
                    key[0] = imageURL.length-1 ;
                }
                else{
                    key[0] = i-1;
                    
                }

                
                
            }
            
        }
        
        

        setImageActive(imageURL[key]);

    }

    return (
        <div style={{ backgroundImage: `url( ${imageActive})` , height: 1000  } }  > 

            <a onClick={prev} className='a1' class="next round a1">&lt;</a>
            <a onClick={next} className='a2' class="next round a2">&gt;</a>



            
        </div>
    )
}

export default Home

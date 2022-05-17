import React from 'react'
import { Link } from 'react-router-dom'
import './image-card.scss';


const Imagecard = ({ Imgid, Imgurl }) => {
    return (
       
            <div  className='image-card' >
            <img src={Imgurl} />
            <div className='link'>
            <Link to={`/detail/${Imgid}`}>
            see Details
          </Link> 

            </div>

            
</div>
       
        
    )
}

export default Imagecard
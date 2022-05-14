import React from 'react'
import { Link } from 'react-router-dom'


const Imagecard = ({ Imgid, Imgurl }) => {
    return (
        <div  >{Imgid}
            <img src={Imgurl} />
            <Link to={`/detail/${Imgid}`} >
            CONTACT ME
          </Link>

        </div>
    )
}

export default Imagecard
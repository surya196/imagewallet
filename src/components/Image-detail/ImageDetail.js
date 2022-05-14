import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


const ImageDetail = () => {
    const { Imgid } = useParams()

    const apikey = '27327111-e649da97be9fa8ea65f42486e';
    const [user, setuser] = useState([]);
    useEffect(() => {

        axios.get(`https://pixabay.com/api/?key=${apikey}&id=${Imgid}`).then(res => setuser(res.data.hits))







    }, [])
    return (
        <>
            {
                user.map((data, index) => (
                    <div key={index} >
                        < img src={data.largeImageURL} />
                    </div>


                )

                )
            }
        </>

    )
}

export default ImageDetail
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './ImageDetail.scss'



const ImageDetail = () => {
    const { Imgid } = useParams()
    const apikey = '27327111-e649da97be9fa8ea65f42486e';
    const [user, setuser] = useState([]);
    

 

    useEffect(() => {

        axios.get(`https://pixabay.com/api/?key=${apikey}&id=${Imgid}`).then(res => setuser(res.data.hits)).catch(error => {
            console.log(error)
         })

    }, [])
    console.log(user)
   
    return (
        <div className='container' >
            {
                user.map((data, index) => (
                    <div key={index} className='image-detail' >

                        < img src={data.largeImageURL} />
                    </div>


                )

                )
            }

            {/* <div className=''> */}
            {
                user.map((data, index) => (

                    <div key={index} className='user-detail' >
                        <div className='user-image'>
                            <img src={data.userImageURL} />


                            <h6>{data.user} </h6>
                        </div>
                        <div className='user-info-wrapper'>
                            <div className='user-info'>
                                <div>
                                    <h5>
                                        Likes <span>
                                            {data.likes}
                                        </span>
                                    </h5>

                                </div>
                                <div>
                                    <h5>
                                        Downloads <span>{data.downloads}</span>
                                    </h5>

                                </div>
                            </div>
                            <div className='user-info'>
                                <div>
                                    <h5>
                                        comments <span>
                                            {data.comments}
                                        </span>
                                    </h5>

                                </div>
                                <div>
                                    <h5>
                                        views <span>{data.views}</span>
                                    </h5>

                                </div>
                            </div>

                        </div>
                        {/* <Link to={data.pageURL} >
            Visit Website
          </Link>  */}

                    </div>
                ))
            }

            {/* </div> */}

        </div>

    )
}

export default ImageDetail
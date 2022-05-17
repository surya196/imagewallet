import React, { useEffect, useState } from 'react';
import Imagecard from '../image-card/Image-card';
import Loader from '../Loader/Loader';
import axios from 'axios';
import './Home.scss'
import logo from '../assets/images/logo.png';
import errorimg from '../assets/images/error.png'
import search from '../assets/images/search.png'
import Sliders from '../Slider-image/Sliders';


const Home = () => {
  const apikey = '27327111-e649da97be9fa8ea65f42486e';
  const [user, setuser] = useState([]);
  const [fruit, setFruit] = useState("");
  const [Dropdown, setDropdown] = useState("");
  const [imgType, setimgType] = useState("");
  const [CatType, setCatType] = useState("");
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);
  const [IsLoading, setIsLoading] = useState(true);




  useEffect(() => {

    getdata(`https://pixabay.com/api/?key=${apikey}&q=${fruit}&image_type=photo&order=${Dropdown}&image_type=${imgType}&category=${CatType}&page=${page}&per_page=32`)
  }, [Dropdown, imgType, CatType, page])

  const getdata = (url) => {
    axios.get(url).then(res => {
      setuser(res.data.hits)
      setIsLoading(false)
    }).catch(error => {
      alert(error)
    })
  }
  const handleSubmit = e => {
    e.preventDefault();

    if (fruit.length === 0) {
      alert('enter something')
    } else {
      getdata(`https://pixabay.com/api/?key=${apikey}&q=${fruit}&image_type=photo&order=${Dropdown}&image_type=${imgType}&category=${CatType}&page=${page}&per_page=30`)
    }


    if (user.length === 0) {
      seterror(true);

    } else {
      seterror(false)
    }
  };
  const change = e => {
    setFruit(e.target.value)
  }

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div className='container'>
      <Sliders />
      <div className='logo-wrapper'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='display-text'>

          find the perfect images here at <br />

          image wallet
        </div>
        <div className='search-bar'>
          <form >
            <input type='text' placeholder='search image' onKeyPress={handleKeypress} value={fruit} onChange={change} />
            <button type='submit' onClick={handleSubmit} > <img src={search} alt='search' /></button>

          </form>
          <div className='dropdown' >
            <select value={Dropdown} onChange={e => setDropdown(e.target.value)}>
              <option value="">Order</option>
              <option value="popular">popular</option>
              <option value="latest">latest</option>

            </select>
            <select value={imgType} onChange={e => setimgType(e.target.value)}>
              <option value="">Type</option>
              <option value="photo">photo</option>
              <option value="illustration">illustration</option>
              <option value="vector">vector</option>


            </select>
            <select value={CatType} onChange={e => setCatType(e.target.value)}>
              <option value="">Catagories</option>
              <option value="backgrounds">backgrounds</option>
              <option value="fashion">fashion</option>
              <option value="nature">nature</option>
              <option value="science">science</option>
              <option value="education">education</option>
              <option value="feelings">feelings</option>
              <option value="animals">animals</option>
              <option value="food">food</option>
              <option value="sports">sports</option>
              <option value="transportation">transportation</option>
              <option value="travel">travel</option>
            </select>

          </div>


        </div>

      </div>
      {IsLoading ? <Loader /> :
        <>

          {error ? <img className='error-img' src={errorimg} alt='error' /> :
            <div className='row'>
              {
                user.map((data, index) => (
                  <div key={index} className='col-sm-12 col-s-6 col-m-6 col-lg-4 col-xl-3 image-card-wrapper'>
                    <Imagecard key={index} Imgid={data.id} Imgurl={data.webformatURL} />

                  </div>


                )

                )

              }


            </div>}

          <div className='page-button'>
            {page <= 1 ? '' : <button onClick={() => setpage(page - 1)} >Prev</button>}

            <button onClick={() => setpage(page + 1)} >Next</button>
          </div>
        </>
      }

    </div>

  )
}

export default Home
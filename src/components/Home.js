import React, { useEffect, useState } from 'react';
import Imagecard from './image-card/Image-card';
import axios from 'axios';

const Home = () => {
  const apikey = '27327111-e649da97be9fa8ea65f42486e';
  const [user, setuser] = useState([]);
  const [fruit, setFruit] = useState("");
  const [Dropdown, setDropdown] = useState("");
  const [imgType, setimgType] = useState("");
  const [CatType, setCatType] = useState("");



  console.log('hits', user)
  useEffect(() => {

    getdata(`https://pixabay.com/api/?key=${apikey}&image_type=photo&order=${Dropdown}&image_type=${imgType}&category=${CatType}`)




  }, [Dropdown, imgType, CatType,])

  const getdata = (url) => {
    axios.get(url).then(res => setuser(res.data.hits))
  }
  const handleSubmit = e => {
    e.preventDefault();
    getdata(`https://pixabay.com/api/?key=${apikey}&q=${fruit}`)
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
    <div>
      <form >
        <input type='text' onKeyPress={handleKeypress} value={fruit} onChange={change} />
        <button type='submit' onClick={handleSubmit} >search</button>

      </form>
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
      {
        user.map((data, index) => (
          <Imagecard key={index} Imgid={data.id} Imgurl={data.previewURL} />

        )

        )
      }
    </div>
  )
}

export default Home
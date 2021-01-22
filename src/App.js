import React, { useState, useEffect } from "react";
import "./App.css";
import {BASE_URL, API_KEY} from './constants';
import axios from 'axios';
import Picture from './components/Picture';
import Header from './components/Header';

function App() {
  const test = {
    "copyright": "Wes Higgins",
     "date": "2021-01-21",
       "explanation": "Interstellar dust clouds and glowing nebulae abound in the fertile constellation of Orion. One of the brightest, M78, is centered in this colorful, wide field view, covering an area north of Orion's belt. At a distance of about 1,500 light-years, the bluish reflection nebula is around 5 light-years across. Its tint is due to dust preferentially reflecting the blue light of hot, young stars. Reflection nebula NGC 2071 is just to the left of M78. Flecks of emission from Herbig-Haro objects, energetic jets from stars in the process of formation, stand out against the dark dust lanes. The exposure also brings out the region's fainter, pervasive reddish glow of atomic hydrogen gas.",
      "hdurl": "https://apod.nasa.gov/apod/image/2101/M78wideHiggins.jpg",
     "media_type": "image",
      "service_version": "v1",
     "title": "M78 Wide Field",
      "url": "https://apod.nasa.gov/apod/image/2101/M78wideHiggins1024.jpg"
    };
  const [nasaData, setNasaData] = useState(test);
  // useEffect(() =>{
  //   axios
  //   .get(`${BASE_URL}?api_key=${API_KEY}`)
  //   .then((res) => {
  //     setNasaData(res.data);
  //   })
  //   .catch((err) => {console.log(err)})
  // }, []);
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      { // nasaData && <Picture pictureURL={ // nasaData.url}/>
      } 
      {<Header title={nasaData.title}/>}
      {<Picture pictureURL={nasaData.url}/>}
    </div>
  );
}
// test
export default App;




//in data
// {
//     "copyright": "Wes Higgins",
//     "date": "2021-01-21",
//     "explanation": "Interstellar dust clouds and glowing nebulae abound in the fertile constellation of Orion. One of the brightest, M78, is centered in this colorful, wide field view, covering an area north of Orion's belt. At a distance of about 1,500 light-years, the bluish reflection nebula is around 5 light-years across. Its tint is due to dust preferentially reflecting the blue light of hot, young stars. Reflection nebula NGC 2071 is just to the left of M78. Flecks of emission from Herbig-Haro objects, energetic jets from stars in the process of formation, stand out against the dark dust lanes. The exposure also brings out the region's fainter, pervasive reddish glow of atomic hydrogen gas.",
//     "hdurl": "https://apod.nasa.gov/apod/image/2101/M78wideHiggins.jpg",
//     "media_type": "image",
//     "service_version": "v1",
//     "title": "M78 Wide Field",
//     "url": "https://apod.nasa.gov/apod/image/2101/M78wideHiggins1024.jpg"
// }
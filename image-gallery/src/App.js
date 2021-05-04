import React, {useState, useEffect} from 'react';
import { Heading } from './components/Heading';
import { Loader } from './components/Loader';
import { UnsplashImage } from './components/UnsplashImage';

import axios from 'axios';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.React_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .then(res => setImages([...images, ...res.data]))
      
  }, [])

  return (
    <div className="App">
      <Heading />
      <Loader />
      {images.map(image => (
        <UnsplashImage url={image.urls.thumb} key={image.id} />
      ))}
    </div>
  );
}

export default App;

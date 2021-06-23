import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';



const App = () => {
  const APP_KEY =  'oaouzlf0kCIbbQAaej21JLMwsphET69gNr44JnkF';


  const [apod, setApod] = useState([])

  useEffect(()=>{
    getApod();
  });

  const getApod = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`);
    const data = await response.json();
    setApod = (data)
    console.log(data)
  }
  return(
    <div className='container'>
      Hello
    </div>
  )
}

export default App;

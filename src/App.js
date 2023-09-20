import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import background from './assets/ny.jpg'

function App() {

  const [quotes, setQuote] = useState([])

  // useEffect react hook to render the API when the page loads

  useEffect(() => {
    getQuotes()

  },[])

  // Function to fetch the API using axios library

  const getQuotes = () => {

    axios.get('https://api.adviceslip.com/advice')
           .then((response) => {
              setQuote([response.data])
           })
           .catch((error) => {
              console.log(error)
           })
        }


  // UI
  return (
    <div className="App" style={{
      backgroundImage : `url(${background})`
    }}>

      {quotes.map((quote, key) => (
        <div className='adviceContainer' key={key}>
          <h1>Random Advices</h1>
          <div className='advices'>
            <p>{quote.slip.advice}</p>
            <button onClick={getQuotes}>Next Advice</button>
          </div>
        </div>

      ))}
    </div>
  );
}

export default App;

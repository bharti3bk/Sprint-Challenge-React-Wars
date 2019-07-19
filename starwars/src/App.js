import React ,{ useState, useEffect} from 'react';
import './App.css'; 
import axios from 'axios';
import CharacterCard from './components/CharacterCard.js';
import { Card } from 'semantic-ui-react'
import images from './images/images'
 
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any. 
  const[state, setState] = useState({});
  // const images = ["img1.jpg","img2.jpg","img3.png","img4.jpg","img5.jpg","img6.jpg","img7.jpg,img8.jpg,img9.jpg,img10.png"];
  
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    .then(res => {
       setState(res.data.results);
       console.log(state);
    }) 
    .catch(error => {
        console.log(error);
    })
  },[state]);
  
  if (state.map != null) {
    console.log(typeof(state))
    console.log(state)
    return (
      
      <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card.Group>
      {
        state.map( (person, index) => {
          return <CharacterCard person={person} img={images[index]} />
      }) 
      } 
      </Card.Group>
      </div>
    )
  }
  else {
    console.log("i am null")
    return (<div className="App"></div>)
  }
}
export default App;

import React from 'react';
import './App.css';
import ImagesBlock from './Components/ImagesBlock'
import Header from './Components/Header';
import ModalProvider from './Context/ModalContext/ModalContextProvider';
import { Controls } from './Components';



function App() {
const [items, setItems] = React.useState([])

React.useEffect(() => {
  try {
  fetch('https://api.thecatapi.com/v1/images/search?limit=3')
   
  // fetch('https://boiling-refuge-66454.herokuapp.com/images')
    .then((res) => res.json())
    .then((arr) => {
      setItems(arr);
    }) }catch (e) {console.log(e)
    }
}, [])     



  return (
    <ModalProvider>
     
    <div className="App">
      <Header />
      <div className="wrapper">
      <div className='intro'> {items.map((obj) => (  
      <ImagesBlock key={obj.id} imageId={obj.id} imageUrl={obj.url} /> ))}
      <Controls />
        </div>
        </div>
        
    </div>
    </ModalProvider>
  );
}

export default App;

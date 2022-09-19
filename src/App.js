import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {Modal, Header, ImagesBlock} from './Components'

function App() {
    const [items, setItems] = React.useState([])
  const [modal, setModal] = useState({isOpen: false, content: ''})

  const setModalImage = useCallback((imgSrc) => {
    console.log('ok')
    setModal(prev => ({...prev, isOpen: true, content: imgSrc}))
}, [])

    const onModalClose = () => {
      setModal(prev => ({...prev, isOpen: false, content: ''}))
    }

    useEffect(() => {
        console.log(modal)
    }, [modal])

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
    <div className="App">
      <Header />
      <div className="wrapper">
      <div className='intro'>
        {items.map((obj) => (
        <ImagesBlock key={obj.id} openModal={setModalImage} imageId={obj.id} imageUrl={obj.url} />
        ))}
      </div>
      <Modal onClose={onModalClose} isModalOpen={modal.isOpen} content={modal.content}/>

      </div></div>

  );
}

export default App;

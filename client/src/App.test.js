// useEffect simulates componentDidMount, componentWillMount, componentDidUpdate.
import React, { useState, useEffect } from 'react'
import Board from './components/board'
import initializeDeck from './deck'

// replaces componentDidMount.  The static empty array as a second argument ensures that useEffect only gets called the first time and not on subsequent renders

// {useState} feature above allows for the use of a getter-method inside an array at the top of this App function; flipped gets the state and setFlipped sets the state
export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  // const [dimension, setDimension] = useState(400);
  // const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)


  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preloadImages()
  }, cards)

  useEffect (() => {
    const resizeListener = window.addEventListener('resize', resizeBoard)
    return () => window.removeEventListener('resize', resizeListener)
  })

const preloadImages = () => {
  cards.map(card => {
    const src = `/img/${card.type}.png`
    new Image().src = src
  })
}

  const handleClick = (id) => {
  setDisabled(true)
  if (flipped.length === 0){
    setFlipped([id])  
    setDisabled(false)
  } else {
  if(sameCardClicked(id))
    return
    setFlipped([flipped[0], id])
    if(isMatch(id)){
      setSolved([...solved, flipped[0], id])
      resetCards()
     } else {
      setTimeout(resetCards, 1200)
     }
    }
  }

const resetCards = () => {
      setFlipped([])
      setDisabled(false)
}
const sameCardClicked = (id) => flipped.includes(id) 
  
const isMatch = (id) => {
  const clickedCard = cards.find(card => card.id === id)
  const flippedCard = cards.find(card => flipped[0] === card.id)
  return flippedCard.type === clickedCard.type
}

  const resizeBoard = () => {
    setDimension(
      Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
      ),
    )
  }

  return (
    <div>
      <h1>Week 19: REACT Homework Memory Card Game for Steve Archuleta</h1>
      <h2>Click and Concentrate! </h2>
      <h2>Can you remember where the cards are?</h2>
      <Board
        cards={cards}
        flipped={flipped}
        dimension={dimension}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
        />
    </div>
  )
}

export default App;
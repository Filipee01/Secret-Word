// CSS
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react'

// Data
import {wordsList} from "./data/words"

// Components
import StartScreen from './components/startScreen'
import Game from './components/game'
import GameOver from './components/gameOver'


const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState()
  const [score, setScore] = useState(0)

  return (
   <div className="App">
    {gameStage === "start" && <StartScreen startGame = {startGame}/>}
    {gameStage === "game" && <Game verifyLetter = {verifyLetter} pickedWord = {pickedWord}
    pickedCategory = {pickedCategory} letters = {letters} guessedLetters = {guessedLetters}
    wrongLetters = {wrongLetters}
    guesses = {guesses}
    score = {score}
    /> }
    {gameStage === "end" && <GameOver retry = {retry} />}
   </div>
  )
}

export default App

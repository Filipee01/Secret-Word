import './gameOver.css'

const gameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default gameOver
import { useState } from "react"
import "./App.css"
import Board from "./components/Board"
import Player from "./components/Player"
import { Player as PlayerType } from "./types/types"

function App() {
    const [player, setPlayer] = useState<PlayerType | null>(null)
    const [result, setResult] = useState<string | null>(null)
    const [isNewGame, setIsNewGame] = useState<boolean>(false)
    const [xScore, setXScore] = useState<number>(0)
    const [oScore, setOScore] = useState<number>(0)

    const onChangePlayer = () => {
        if (player === "X") {
            setPlayer("O")
        } else {
            setPlayer("X")
        }
    }

    const onShowResult = (result: PlayerType | "Draw") => {
        if (result === "Draw") {
            setResult("The game ended in a draw!")
            setXScore(xScore + 0.5)
            setOScore(oScore + 0.5)
        } else {
            setResult(`Player ${result} is the winner!`)
            if (result === "X") {
                setXScore(xScore + 1)
            } else {
                setOScore(oScore + 1)
            }
        }
        setPlayer(null)
    }

    const onNewGameStart = () => {
        setResult(null)
        setIsNewGame(!isNewGame)
        setPlayer("X")
    }

    return (
        <>
            <p
                className="game-result"
                style={{ visibility: result ? "visible" : "hidden" }}
            >
                {result}
            </p>
            <div className="game">
                <Player name="X" isSelected={player === "X"} score={xScore} />
                <Board
                    isNewGame={isNewGame}
                    player={player}
                    handleChangePlayer={onChangePlayer}
                    handleShowResult={onShowResult}
                />
                <Player name="O" isSelected={player === "O"} score={oScore} />
            </div>
            <button onClick={onNewGameStart}>New Game</button>
        </>
    )
}

export default App

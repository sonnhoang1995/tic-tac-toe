import { useEffect, useState } from "react"
import { checkWinner } from "../lib/helpers"
import { Player } from "../types/types"

interface Props {
    isNewGame: boolean
    player: Player | null
    handleChangePlayer: () => void
    handleShowResult: (result: Player | "Draw") => void
}

const Board = ({
    isNewGame,
    player,
    handleChangePlayer,
    handleShowResult
}: Props) => {
    const [squares, setSquares] = useState<(Player | null)[][]>([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])

    useEffect(() => {
        setSquares([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ])
    }, [isNewGame])

    const onSquareClick = (
        square: Player | null,
        row: number,
        column: number
    ) => {
        if (!player || square) return
        const newSquares = [...squares]
        newSquares[row][column] = player
        setSquares(newSquares)
        const result = checkWinner(squares)
        if (!result) {
            handleChangePlayer()
        } else {
            handleShowResult(result)
        }
    }

    return (
        <div className="board">
            {squares.map((row: (Player | null)[], i: number) => {
                return (
                    <div className="row" key={`row-${i}`}>
                        {row.map((square: Player | null, j: number) => (
                            <div
                                className={`square ${
                                    square || !player
                                        ? "disabled-square"
                                        : "normal-square"
                                }`}
                                key={`square-${i}-${j}`}
                                onClick={() => onSquareClick(square, i, j)}
                            >
                                <p
                                    className={`${
                                        square === "X" ? "x-square" : "o-square"
                                    }`}
                                >
                                    {square}
                                </p>
                            </div>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}

export default Board

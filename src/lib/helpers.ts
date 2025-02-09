import { Board, Player } from "../types/types"

export function checkWinner(board: Board): Player | "Draw" | null {
    const winningCombinations = [
        [
            [0, 0],
            [0, 1],
            [0, 2]
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2]
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2]
        ],

        [
            [0, 0],
            [1, 0],
            [2, 0]
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1]
        ],
        [
            [0, 2],
            [1, 2],
            [2, 2]
        ],

        [
            [0, 0],
            [1, 1],
            [2, 2]
        ],
        [
            [0, 2],
            [1, 1],
            [2, 0]
        ]
    ]

    for (const combination of winningCombinations) {
        const [a, b, c] = combination
        const [ax, ay] = a
        const [bx, by] = b
        const [cx, cy] = c

        if (
            board[ax][ay] &&
            board[ax][ay] === board[bx][by] &&
            board[ax][ay] === board[cx][cy]
        ) {
            return board[ax][ay]
        }
    }

    if (board.every((row) => row.every((square) => square !== null))) {
        return "Draw"
    }

    return null
}

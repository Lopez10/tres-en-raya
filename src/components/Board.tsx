import { useState } from "react"
import { Square } from "./Square"

export const Board = () => {
    const [board, setBoard] = useState<string[]>(Array(9).fill(null))
    return (
        <section className='game'>
            {
                board.map((_, index) => (
                    <Square
                        key={index}
                        index={index}
                        updateBoard={() => {
                            const newBoard = [...board]
                            newBoard[index] = 'X'
                            setBoard(newBoard)
                        }}>
                        {board[index]}
                    </Square>
                ))
            }
        </section>
    )
}
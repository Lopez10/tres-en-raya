import { Square } from "./Square"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { setBoard } from "../store/features/gameSlice"

export const Board = () => {
    const board = useSelector((state: RootState) => state.game.board)
    const dispatch = useDispatch()
    const updateBoard = (index: number) => {
        const newBoard = [...board]
        newBoard[index] = 'X'
        dispatch(setBoard({ board: newBoard }))
    }
    return (
        <section className='game'>
            {
                board.map((_, index) => (
                    <Square
                        key={index}
                        index={index}
                        updateBoard={updateBoard}>
                        {board[index]}
                    </Square>
                ))
            }
        </section>
    )
}
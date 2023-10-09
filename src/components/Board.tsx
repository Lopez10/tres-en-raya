import axios from "axios"
import { Square } from "./Square"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useEffect, useState } from "react"
import { Game } from "../interfaces/Game"

export const Board = () => {
    const { id, board, turn, status, playerId } = useSelector((state: RootState) => state.game)

    const [boardLocal, setBoardLocal] = useState(board)
    const [turnLocal, setTurnLocal] = useState(turn)
    const [statusLocal, setStatusLocal] = useState(status)

    useEffect(() => {
        if (id !== '' && turnLocal === playerId) {
            updateMove(boardLocal)
        }
    }, [boardLocal]);

    const updateLocalBoard = (index: number) => {
        const newBoard = [...boardLocal]
        newBoard[index] = 'X'
        setTurnLocal(playerId)
        setBoardLocal(newBoard)
    }

    const updateMove = async (board: string[]) => {
        const { data: moveIA } = await axios.post('http://localhost:3000/games/move', {
            id,
            board,
            status,
            turn,
            playerId
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        IAResponse(moveIA)
    }

    const IAResponse = async (moveIA: Game) => {
        setTurnLocal('IA')
        setBoardLocal(moveIA.board)
        setStatusLocal(moveIA.status)
    }
    return (
        <section className='game'>
            {
                boardLocal.map((_, index) => (
                    <Square
                        key={index}
                        index={index}
                        updateBoard={updateLocalBoard}
                        disabled={statusLocal === 'FINISHED'}
                    >
                        {boardLocal[index]}
                    </Square>
                ))
            }
        </section>
    )
}
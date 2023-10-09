import axios from "axios"
import { Square } from "./Square"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useEffect, useState } from "react"

export const Board = () => {
    const board = useSelector((state: RootState) => state.game.board)
    const turn = useSelector((state: RootState) => state.game.turn)
    const game = useSelector((state: RootState) => state.game)

    const [boardLocal, setBoardLocal] = useState(board)
    const [turnLocal, setTurnLocal] = useState(turn)
    const [status, setStatus] = useState(game.status)

    useEffect(() => {
        if (game.id !== '' && turnLocal === game.playerId) {
            updateMove()
        }
    }, [boardLocal]);

    const updateLocalBoard = (index: number) => {
        setTurnLocal(game.playerId)
        const newBoard = [...boardLocal]
        newBoard[index] = 'X'
        setBoardLocal(newBoard)
    }

    const updateMove = async () => {
        const { data: moveIA } = await axios.post('http://localhost:3000/games/move', {
            id: game.id,
            board: boardLocal,
            status: game.status,
            turn: game.turn,
            playerId: game.playerId
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setTurnLocal('IA')
        setBoardLocal(moveIA.board)
        setStatus(moveIA.status)
    }
    return (
        <section className='game'>
            {
                boardLocal.map((_, index) => (
                    <Square
                        key={index}
                        index={index}
                        updateBoard={updateLocalBoard}
                        disabled={status === 'FINISHED'}
                    >
                        {boardLocal[index]}
                    </Square>
                ))
            }
        </section>
    )
}
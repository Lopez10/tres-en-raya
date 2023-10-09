import axios from "axios"
import { Square } from "./Square"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useEffect, useState } from "react"
import { Game } from "../interfaces/Game"
import { Result } from "./Result"

export const Board = () => {
    const { id, board, turn, status, playerId, winner } = useSelector((state: RootState) => state.game)

    const [boardLocal, setBoardLocal] = useState(board)
    const [turnLocal, setTurnLocal] = useState(turn)
    const [statusLocal, setStatusLocal] = useState(status)
    const [winnerLocal, setWinnerLocal] = useState(winner)

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
            playerId,
            winner
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
        setWinnerLocal(moveIA.winner)
    }

    const determineResult = () => {
        const resultMappings = {
            [playerId]: 'Ganaste',
            'IA': 'Perdiste',
            null: 'Empate'
        };

        return resultMappings[winnerLocal];
    }

    return (
        <section className='game'>
            {
                boardLocal.map((_, index) => (
                    <Square
                        key={index}
                        index={index}
                        updateBoard={updateLocalBoard}
                        disabled={statusLocal === 'FINISHED' || boardLocal[index] !== ''}
                    >
                        {boardLocal[index]}
                    </Square>
                ))
            }{
                statusLocal === 'FINISHED' && <Result text={determineResult()} />
            }
        </section>
    )
}


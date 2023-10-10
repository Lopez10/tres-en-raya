import axios from "axios"
import { Square } from "./Square"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useEffect, useState } from "react"
import { GAME_STATUS, Game } from "../interfaces/Game"
import { Result } from "./Result"

export const PLAYER2 = 'IA'

export const Board = () => {
    const { id, board, turn, status, playerId, winner } = useSelector((state: RootState) => state.game)

    const [boardLocal, setBoardLocal] = useState(board)
    const [turnLocal, setTurnLocal] = useState(turn)
    const [statusLocal, setStatusLocal] = useState(status)
    const [winnerLocal, setWinnerLocal] = useState(winner)

    useEffect(() => {
        if (id !== '' && turnLocal === playerId) {
            updateMoveAndIAResponse()
        }
    }, [boardLocal]);


    const updateLocalBoardWithPlayerMove = (index: number) => {
        const newBoard = [...boardLocal]
        newBoard[index] = 'X'
        setTurnLocal(playerId)
        setBoardLocal(newBoard)
    }

    const updateMoveAndIAResponse = async () => {
        const { data: IAMovement } = await updateMove(boardLocal)
        setTurnLocal(PLAYER2)
        updateGameData(IAMovement)
    }

    const updateMove = async (board: string[]) => {
        return await axios.post('http://localhost:3000/games/move', {
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
    }

    const updateGameData = async (updatedGameData: Game) => {
        setBoardLocal(updatedGameData.board)
        setStatusLocal(updatedGameData.status)
        setWinnerLocal(updatedGameData.winner)
    }


    const determineResult = () => {
        if (winnerLocal === playerId) return 'Ganaste';
        if (winnerLocal === PLAYER2) return 'Perdiste';
        return 'Empate';
    };

    return (
        <>
            <div className='game'>
                {
                    boardLocal.map((_, index) => (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateLocalBoardWithPlayerMove}
                            disabled={statusLocal === 'FINISHED' || boardLocal[index] !== ''}
                        >
                            {boardLocal[index]}
                        </Square>
                    ))
                }
            </div >
            {
                statusLocal === 'FINISHED' && <Result text={determineResult()} />
            }
            {
                statusLocal === GAME_STATUS.FINISHED
                    ? <h3>Juego terminado</h3>
                    : <h3>Partida en curso</h3>
            }
        </>

    )
}


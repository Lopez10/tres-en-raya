import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Board } from "../components/Board"
import { RootState } from "../store/store"
import { setGame } from "../store/features/gameSlice"
import { useEffect } from "react"

export const Game = () => {
    const playerId = useSelector((state: RootState) => state.player.id)
    const dispatch = useDispatch()

    useEffect(() => {
        const createEmptyGame = async () => {
            const { data } = await axios.post('http://localhost:3000/games', {
                playerId
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            dispatch(setGame({ game: data }))
        }
        createEmptyGame()
    }, [dispatch, playerId])
    return (
        <div>
            <Board />
        </div>
    )
}
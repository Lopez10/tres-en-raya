import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { Board } from "../components/Board"
import { RootState } from "../store/store"
import { setGame } from "../store/features/gameSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Game = () => {
    const playerId = useSelector((state: RootState) => state.player.id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    useEffect(() => {
        if (playerId === '') {
            navigate('/')
        } else {
            createEmptyGame()
        }
    }, [dispatch, navigate, playerId])
    return (
        <div>
            <Board />
        </div>
    )
}
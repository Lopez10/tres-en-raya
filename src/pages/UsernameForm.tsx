import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setPlayer, setUsername } from '../store/features/playerSlice'
import { RootState } from "../store/store"
import { useNavigate } from "react-router-dom"

export const UsernameForm = () => {
    const username = useSelector((state: RootState) => state.player.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createOrAccessPlayer = async ({
        route
    }: {
        route: string
    }) => {
        const { data } = await axios.post('http://localhost:3000/players', {
            username
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch(setPlayer({ player: data }))

        navigate(route)
    }

    return (
        <div style={{
            display: 'grid',
            gap: '50px',
        }}>
            <h2>¿Cual es tu nombre de usuario?</h2>
            <input type="text" name="username" style={{
                width: '100%',
                padding: '10px',
                fontSize: '1.5rem',
                borderRadius: '8px'
            }}
                value={username}
                onChange={(e) => dispatch(setUsername({ username: e.target.value }))}
            />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
            }}>
                <button
                    style={{
                        fontSize: '1rem',
                    }}
                    disabled={username === ''}
                    onClick={() => createOrAccessPlayer({ route: '/game' })}
                >
                    Empezar
                </button>
                <button
                    style={{
                        fontSize: '1rem',
                    }}
                    disabled={username === ''}
                    onClick={() => createOrAccessPlayer({ route: '/ranking' })}
                >
                    Ranking
                </button>
            </div>
        </div>
    )
}
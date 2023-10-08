import axios from "axios"
import { useState } from "react"

export const UsernameForm = () => {

    const [username, setUsername] = useState<string>('')

    const createOrAccessPlayer = async () => {
        await axios.post('http://localhost:3000/players', {
            username: username
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
                onChange={(event) => setUsername(event.target.value)}
            />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <button
                    style={{
                        fontSize: '1rem',
                    }}
                    onClick={() => createOrAccessPlayer()}
                >
                    Empezar
                </button>
                <button
                    style={{
                        fontSize: '1rem',
                    }}>
                    Ranking
                </button>
            </div>
        </div>
    )
}
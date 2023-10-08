import { useState } from "react"

export const UsernameForm = () => {

    const [username, setUsername] = useState<string>('')

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
                    }}>
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
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Ranking = () => {
    const player = useSelector((state: RootState) => state.player)
    const navigate = useNavigate()

    useEffect(() => {
        if (player.id === '') {
            navigate('/')
        }
    })

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
        }}>
            <h1>Ranking</h1>
            <div style={{
                display: 'flex',
                gap: '50px',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                <StatBlock
                    title='Victorias'
                    value={player.wins}
                />
                <StatBlock
                    title='Derrotas'
                    value={player.losses}
                />
                <StatBlock
                    title='Empates'
                    value={player.draws}
                />
            </div>
        </div >
    )
}

const StatBlock = ({
    title,
    value
}: {
    title: string;
    value: string | number;
}) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        width: '200px',
    }}>
        <h2>{title}</h2>
        <h3>{value}</h3>
    </div>
);

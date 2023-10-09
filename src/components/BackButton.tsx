import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button
            style={{
                fontSize: '1rem',
            }}
            onClick={() => navigate(-1)}
            disabled={window.location.pathname === '/'}
        >
            Volver
        </button>
    );
}
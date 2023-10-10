export interface Game {
    id: string;
    status: string;
    turn: string;
    board: string[];
    playerId: string;
    winner: string;
}

export const GAME_STATUS = {
    IN_PROGRESS: 'En curso',
    FINISHED: 'Finalizado',
}
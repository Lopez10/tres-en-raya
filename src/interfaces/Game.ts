export interface Game {
    id: string;
    status: string;
    turn: string;
    board: string[];
    playerId: string;
    winner: string;
}

export const GAME_STATUS = {
    IN_PROGRESS: 'IN_PROGRESS',
    FINISHED: 'FINISHED',
}
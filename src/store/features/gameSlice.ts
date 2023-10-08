import { createSlice } from "@reduxjs/toolkit";

export interface Game {
    id: string;
    status: string;
    turn: string;
    board: string[];
    playerId: string;
}

const initialState: Game = {
    id: '',
    status: '',
    turn: '',
    board: [],
    playerId: '',
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGame: (state, action) => {
            const { id, status, turn, board, playerId } = action.payload.game;
            return {
                ...state,
                id,
                status,
                turn,
                board,
                playerId,
            }
        },
    },
});

export const { setGame } = gameSlice.actions;
export default gameSlice.reducer;
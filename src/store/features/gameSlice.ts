import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Game } from "../../interfaces/Game";

const initialState: Game = {
    id: '',
    status: '',
    turn: '',
    board: ['','','','','','','','',''],
    playerId: '',
    winner: '',
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGame: (state, action: PayloadAction<{game: Game}>) => {
            const { id, status, turn, board, playerId, winner } = action.payload.game;
            return {
                ...state,
                id,
                status,
                turn,
                board,
                playerId,
                winner
            }
        },

        setBoard: (state, action: PayloadAction<{board: string[]}>) => {
            return {
                ...state,
                board: action.payload.board,
            }
        }
    },
});

export const { setGame, setBoard } = gameSlice.actions;
export default gameSlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Player } from "../../interfaces/Player";

const initialState: Player = {
    id: '',
    username: '',
    wins: 0,
    losses: 0,
    draws: 0,
}


export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<{username: string}>) => {
            return {
                ...state,
                username: action.payload.username,
            }
        },

        setPlayer: (state, action: PayloadAction<{player: Player}>) => {
            const { id, username, wins, losses, draws } = action.payload.player;
            return {
                ...state,
                id,
                username,
                wins,
                losses,
                draws,
            }
        },
    },
});

export const { setPlayer, setUsername } = playerSlice.actions;
export default playerSlice.reducer;
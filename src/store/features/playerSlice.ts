import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Player {
    id: string;
    username: string;
    wins: number;
    losses: number;
    draws: number;
}

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
            console.log(action.payload.player)
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
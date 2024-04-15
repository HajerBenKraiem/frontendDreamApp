import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: 'auth', // Correction de la faute de frappe ici
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload.others; // Correction de la faute de frappe ici
            state.token = action.payload.token;
        },
        register(state, action) {
            state.user = action.payload.others; // Correction de la faute de frappe ici
            state.token = action.payload.token;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.clear();
        },
    },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;

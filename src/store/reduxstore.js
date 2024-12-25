
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isCounterActive: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increasse(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.isCounterActive = !state.isCounterActive;
        }
    }
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});





const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});
export const counterAction = counterSlice.actions;
export const authActins=authSlice.actions;

export default store;

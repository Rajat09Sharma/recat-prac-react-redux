import { createStore } from "redux";


const counterReducer = (state = { counter: 0, isCounterActive: false }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            isCounterActive: state.isCounterActive
        }
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            isCounterActive: state.isCounterActive

        }
    }

    if (action.type === "increase") {
        return {
            counter: state.counter + action.payload,
            isCounterActive: state.isCounterActive

        }
    }

    if (action.type === "toggle") {
        return {
            counter: state.counter,
            isCounterActive: !state.isCounterActive
        }
    }

    return state;

}

const store = createStore(counterReducer);

export default store;

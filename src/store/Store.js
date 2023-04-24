// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter:0, showCounter:true};

const counterSlice = createSlice ({
	name : 'counter',
	initialState : initialCounterState,
	reducers : {
		increment(state,action) {
			state.counter = state.counter+action.payload;
		},
		decrement(state, action) {
			state.counter = state.counter-action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		}
	}
});

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name : 'authentication',
    initialState : initialAuthState,
    reducers : {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
});

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === 'increment') {
// 		return {
// 			counter : state.counter+action.value,
// 			showCounter : state.showCounter
// 		};
// 	}

// 	if (action.type === 'decrement') {
// 		return {
// 			counter : state.counter-action.value,
// 			showCounter : state.showCounter
// 		};
//   }

// 	if (action.type === 'toggle') {
// 		return {
// 			counter : state.counter,
// 			showCounter : !state.showCounter
// 		};
// 	}

    // if (action.type === 'INCREMENTBY2') {
    //     return {
    //         counter : state.counter+2
    //     };
    // }

    // if (action.type === 'DECREMENTBY2') {
    //     return {
    //         counter : state.counter-2
    //     };
    // }

    // if (action.type === 'INCREMENTBY5') {
    //     return {
    //         counter : state.counter+5
    //     };
    // }

    // if (action.type === 'DECREMENTBY5') {
    //     return {
    //         counter : state.counter-5
    //     };
    // }
//   return state;
// }

const store = configureStore({
	reducer : { counter : counterSlice.reducer, auth : authSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
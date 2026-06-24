import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter", 
    initialState:{
        value:0
    },
    reducers:{
        increment : (state)=>{state.value+=1},
        decrement : (state)=>{state.value-=1},
        incrementByCount : (state, payload)=> {state.value+=payload.payload}
    }

})


export const {increment, decrement, incrementByCount} = counterSlice.actions
export default counterSlice.reducer
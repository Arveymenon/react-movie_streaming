import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type StateType = {
    value: number
}

const initialState: StateType = {
    value: 0
}

export const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>)=>{
            state.value = action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = slice.actions

export const selectCount = (state: RootState) => state.counter.value

export default slice.reducer


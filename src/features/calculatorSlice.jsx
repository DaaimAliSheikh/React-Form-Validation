import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const calculatorSlice = createSlice({
	name:'calculator',
	initialState,  ///name & initialState are reserved keywords
	reducers: {
		append:(state, {payload})=>{
			state.cartItems = [payload]  //id
		}
	}
})

export const calculatorReducer = calculatorSlice.reducer
export const {numberEntered} = calculatorSlice.actions
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	searchValue: '',
};


const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilters(state, action) {
			state.searchValue = action.payload;
		}
	},
}
)


export const { setFilters } = filterSlice.actions;

export default filterSlice.reducer;
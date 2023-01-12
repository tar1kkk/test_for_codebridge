import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk('', async () => {
	try {
		const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
		return data;
	} catch (e) {
		console.log(e);
	}
}
);


type Item = {
	id: number;
	title: string;
	body: string;
}


const initialState = {
	items: [],
	status: '',
};


const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = [...state.items, ...action.payload];
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchItems.pending, (state, action) => {
			state.status = 'loading';
			state.items = [];
		});
		builder.addCase(fetchItems.fulfilled, (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		});
		builder.addCase(fetchItems.rejected, (state, action) => {
			state.status = 'error';
			state.items = [];
		});
	}
}
)


export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
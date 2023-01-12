import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
	reducer: {
		itemSlice,
		filterSlice
	}
});

export type RootState = ReturnType<typeof store.getState>;
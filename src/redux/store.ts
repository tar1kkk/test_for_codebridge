import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/itemSlice";

export const store = configureStore({
	reducer: {
		itemSlice
	}
});

export type RootState = ReturnType<typeof store.getState>;
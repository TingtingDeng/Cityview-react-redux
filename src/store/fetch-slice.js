import { createSlice } from "@reduxjs/toolkit";
import { defaultCity } from "./Consts";

const fetchSlice = createSlice({
	name: "fetch",
	initialState: {
		images: [],
		index: 0,
		keyword: defaultCity,
		currentPage: 1,
		totalPage: null,
	},
	reducers: {
		updateImages(state, action) {
			state.images = action.payload;
			state.index = 0;
		},
		clickImg(state, action) {
			state.index = action.payload;
		},
		keywordSearch(state, action) {
			state.keyword = action.payload;
			state.currentPage = 1;
		},
		prevPage(state) {
			state.currentPage > 1 && state.currentPage--;
		},
		nextPage(state) {
			state.currentPage < state.totalPage && state.currentPage++;
		},
		updateTotalPage(state, action) {
			state.totalPage = action.payload;
		},
	},
});

export const fetchActions = fetchSlice.actions;
export default fetchSlice;

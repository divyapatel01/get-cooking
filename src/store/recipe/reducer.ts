import { createSlice } from "@reduxjs/toolkit";

import * as Actions from "./actions";
import { Feed, Recipe, Tags } from "../../types";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    feeds: [] as Feed[],
    featured: undefined as Feed | undefined,
    trending: undefined as Feed | undefined,
    top: undefined as Feed | undefined,
    seasonal: undefined as Feed | undefined,
    tags: { list: [] as Tags[], isLoading: false },
    list: { count: 0, results: [] as Recipe[], currentPage: 0, isLoading: false },
    isLoading: true,
  },
  reducers: {
    setListPage: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Actions.recipeList.pending, (state) => {
        state.list.isLoading = true;
      })
      .addCase(Actions.recipeList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.list.isLoading = false;
      })
      .addCase(Actions.recipeList.rejected, (state) => {
        state.list.isLoading = true;
      })
      .addCase(Actions.recipeFeeds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Actions.recipeFeeds.fulfilled, (state, action) => {
        state.feeds = action.payload.feeds;
        state.featured = action.payload.featured;
        state.trending = action.payload.trending;
        state.top = action.payload.top;
        state.seasonal = action.payload.seasonal;
        state.isLoading = false;
      })
      .addCase(Actions.recipeTags.pending, (state) => {
        state.tags.isLoading = true;
      })
      .addCase(Actions.recipeTags.fulfilled, (state, action) => {
        state.tags.list = action.payload;
        state.tags.isLoading = false;
      })
      .addCase(Actions.recipeTags.rejected, (state) => {
        state.tags.isLoading = false;
      });
  },
});

export const { setListPage } = recipeSlice.actions;

export default recipeSlice.reducer;

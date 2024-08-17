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
    tags: [] as Tags[],
    list: [] as Recipe[],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Actions.recipeList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Actions.recipeList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
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
        state.isLoading = true;
      })
      .addCase(Actions.recipeTags.fulfilled, (state, action) => {
        state.tags = action.payload;
        state.isLoading = false;
      });
  },
});

export default recipeSlice.reducer;

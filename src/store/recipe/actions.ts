import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Feed } from "../../types";

const L = "recipe/list";
const F = "recipe/feeds";
const T = "recipe/tags";

interface Params {
  page: number;
  limit: number;
  q: string;
}

export const recipeList = createAsyncThunk(L, async (params: Params) => {
  const response = await axios.get("/recipes/list", {
    params: { from: String(params.page), size: String(params.limit), q: params.q },
  });
  return { ...response.data, currentPage: params.page };
});

export const recipeFeeds = createAsyncThunk(F, async () => {
  const response = await axios.get("/feeds/list", {
    params: {
      size: "5",
      timezone: "+0530",
      vegetarian: "false",
      from: "0",
    },
  });

  const feeds = response.data.results as Feed[];
  const featured = feeds.find((f) => f.type === "featured");
  const trending = feeds.find((f) => f.category === "Trending");
  const top = feeds.find((f) => f.category === "Top");
  const seasonal = feeds.find((f) => f.category === "Seasonal");

  return { feeds, featured, trending, top, seasonal };
});

export const recipeTags = createAsyncThunk(T, async () => {
  const response = await axios.get("/tags/list");
  return response.data.results;
});

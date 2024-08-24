import axios from "axios";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AllRecipes from "./pages/AllRecipes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PopularRecipes from "./pages/PopularRecipes";
import RecipeDetail from "./pages/RecipeDetail";
import SeasonalRecipes from "./pages/SeasonalRecipes";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollToTop from "./components/layout/ScrollToTop";
import Loading from "./components/Loading";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import { recipeFeeds } from "./store/recipe/actions";

axios.defaults.headers["X-RapidAPI-Key"] = String(process.env.REACT_APP_API_KEY);
axios.defaults.headers["X-RapidAPI-Host"] = String(process.env.REACT_APP_API_HOST);
axios.defaults.baseURL = String(process.env.REACT_APP_API_URL);

export default function App() {
  const dispatch = useAppDispatch();

  const feeds = useAppSelector((state) => state.recipes.feeds);
  const isLoading = useAppSelector((state) => state.recipes.isLoading);

  useEffect(() => {
    if (feeds.length === 0) {
      dispatch(recipeFeeds());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Header />
          <main>
            <div className="container py-4">
              <div className="d-flex flex-column" style={{ gap: 32 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/recipes" element={<AllRecipes />} />
                  <Route path="/recipes/popular" element={<PopularRecipes />} />
                  <Route path="/recipes/seasonal" element={<SeasonalRecipes />} />
                  <Route path="/recipe/:id" element={<RecipeDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
            <ScrollToTop />
          </main>
          <Footer />
        </Router>
      )}
    </div>
  );
}

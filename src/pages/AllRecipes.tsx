import { useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeSearch from "../components/RecipeSearch";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { recipeList, recipeTags } from "../store/recipe/actions";

export default function App() {
  const dispatch = useAppDispatch();

  const recipes = useAppSelector((state) => state.recipes.list);
  const tags = useAppSelector((state) => state.recipes.tags);

  useEffect(() => {
    if (recipes.length <= 0) {
      dispatch(recipeList({ q: "" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipes]);

  useEffect(() => {
    if (tags.length <= 0) {
      dispatch(recipeTags());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  const seasonal = tags.filter((t) => t.type === "seasonal");
  const cuisine = tags.filter((t) => t.type === "cuisine");
  const meal = tags.filter((t) => t.type === "meal");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="recipe-filter">
            <div className="mb-5">
              <h2>Filter Recipes</h2>
              <p>check multiple boxes below to narrow recipe search result:</p>
            </div>
            <form>
              <div className="mb-5">
                <h5>Search recipe:</h5>
                <RecipeSearch />
              </div>
              <div className="mb-5">
                <h5>By Season:</h5>
                {seasonal.map((item) => (
                  <div key={item.id} className="form-check">
                    <input type="checkbox" className="form-check-input" id={item.name} />
                    <label className="form-check-label" htmlFor={item.name}>
                      {item.display_name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mb-5">
                <h5>By Meal:</h5>
                {meal.map((item) => (
                  <div key={item.id} className="form-check">
                    <input type="checkbox" className="form-check-input" id={item.name} />
                    <label className="form-check-label" htmlFor={item.name}>
                      {item.display_name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mb-5">
                <h5>By Cuisine:</h5>
                {cuisine.map((item) => (
                  <div key={item.id} className="form-check">
                    <input type="checkbox" className="form-check-input" id={item.name} />
                    <label className="form-check-label" htmlFor={item.name}>
                      {item.display_name}
                    </label>
                  </div>
                ))}
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            {recipes.map((r, i) => {
              return (
                <div key={i} className="col-md-6">
                  <RecipeCard recipe={r} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

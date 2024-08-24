import RecipeCard from "../components/recipe/RecipeCard";
import { useAppSelector } from "../store/hooks";

const PopularRecipes = () => {
  const top = useAppSelector((state) => state.recipes.top);

  return (
    <>
      <h2>Popular Recipes</h2>
      <div className="row">
        {top?.items?.map((item, i) => (
          <div key={i} className="col-md-3">
            <RecipeCard recipe={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularRecipes;

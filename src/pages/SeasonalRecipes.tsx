import RecipeCard from "../components/recipe/RecipeCard";
import { useAppSelector } from "../store/hooks";

const SeasonalRecipes = () => {
  const seasonal = useAppSelector((state) => state.recipes.seasonal);

  return (
    <>
      {/* <h2>{seasonal?.name || "Seasonal Recipes"}</h2> */}
      <div className="row">
        {seasonal?.items?.map((item, i) => (
          <div key={i} className="col-md-4">
            <RecipeCard recipe={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SeasonalRecipes;

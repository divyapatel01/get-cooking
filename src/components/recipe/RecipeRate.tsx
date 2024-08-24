import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Recipe } from "../../types";

const RecipeRate = ({ recipe, position = "row" }: { recipe: Recipe; position?: "row" | "col" }) => {
  return (
    <div className={`recipe-ratings d-flex gap-3 ${position === "row" ? "flex-row" : "flex-column"}`}>
      <div className="recipe-rate d-flex align-items-center gap-1">
        <AiOutlineLike />
        <span>{recipe.user_ratings.count_positive}</span>
      </div>
      <div className="recipe-rate d-flex align-items-center gap-1">
        <AiOutlineDislike />
        <span>{recipe.user_ratings.count_negative}</span>
      </div>
    </div>
  );
};

export default RecipeRate;

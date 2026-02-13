import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { Recipe } from "../../types";

const AiOutlineLikeIcon = AiOutlineLike as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const AiOutlineDislikeIcon = AiOutlineDislike as React.ComponentType<React.SVGProps<SVGSVGElement>>;

const RecipeRate = ({ recipe, position = "row" }: { recipe: Recipe; position?: "row" | "col" }) => {
  return (
    <div className={`recipe-ratings d-flex gap-3 ${position === "row" ? "flex-row" : "flex-column"}`}>
      <div className="recipe-rate d-flex align-items-center gap-1">
        <AiOutlineLikeIcon />
        <span>{recipe.user_ratings.count_positive}</span>
      </div>
      <div className="recipe-rate d-flex align-items-center gap-1">
        <AiOutlineDislikeIcon />
        <span>{recipe.user_ratings.count_negative}</span>
      </div>
    </div>
  );
};

export default RecipeRate;

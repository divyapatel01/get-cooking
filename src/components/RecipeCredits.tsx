import moment from "moment";
import { Recipe } from "../types";

const RecipeCredits = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="recipe-card-credits">
      {recipe.credits.map((cr) => {
        return (
          <div className="d-flex align-items-center" key={cr.id}>
            <div className="me-3">
              <img src={cr.image_url} alt="" className="rounded-circle" width="60px" height="60px" />
            </div>
            <div>
              <p className="m-0">{cr.name}</p>
              <p className="mb-0">{moment.unix(recipe.created_at).format("MMM DD, YYYY")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCredits;

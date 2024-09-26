import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import RecipeCredits from "../components/recipe/RecipeCredits";
import RecipeRate from "../components/recipe/RecipeRate";
import RecipeSimilar from "../components/recipe/RecipeSimilar";
import useIsMobile from "../hooks/useIsMobile";
import { Recipe } from "../types";

const RecipeDetail = () => {
  const { id } = useParams();

  const isMobile = useIsMobile();

  const [details, setDetails] = useState<Recipe>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/recipes/get-more-info", { params: { id } }).then((response) => {
      setDetails(response.data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!details) {
    return <p className="text-center">This recipe is not available</p>;
  }

  return (
    <>
      <div className="recipe-wrapper">
        <div className="row">
          <div className="col-md-6">
            {isMobile && <h1 className="recipe-title">{details.name}</h1>}

            <img src={details.thumbnail_url} alt="" className="img-fluid recipe-img" />
          </div>
          <div className="col-md-6">
            {!isMobile && <h1 className="recipe-title">{details.name}</h1>}

            <div className="row" style={{ gap: "24px" }}>
              <div className="col-md-12">
                <div dangerouslySetInnerHTML={{ __html: details.description }} />
                <div className="recipe-instructions">
                  <h3 className="recipe-subtitle">Instructions</h3>
                  <ol>
                    {details.instructions.map((instruction) => (
                      <li key={instruction.id}>{instruction.display_text}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="col-md-12">
                <div className="recipe-meta-wrapper">
                  <div className="recipe-meta">
                    <span>Prep Time</span>
                    <span>{details.prep_time_minutes} min</span>
                  </div>
                  <div className="recipe-meta">
                    <span>Servings</span>
                    <span>
                      {details.num_servings} {details.servings_noun_plural}
                    </span>
                  </div>
                </div>
                <div className="recipe-nutrition">
                  <h3>Nutrition</h3>
                  <ul>
                    <li>calories: {details.nutrition.calories}</li>
                    <li>carbohydrates: {details.nutrition.carbohydrates}</li>
                    <li>fat: {details.nutrition.fat}</li>
                    <li>fiber: {details.nutrition.fiber}</li>
                    <li>protein: {details.nutrition.protein}</li>
                    <li>sugar: {details.nutrition.sugar}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <video width="352" height="198" controls>
        <source src={details.video_url} type="application/x-mpegURL" />
      </video> */}
          </div>
        </div>

        <div>
          <h2>Credits</h2>
          <div className="d-flex justify-content-between align-items-center">
            <RecipeCredits recipe={details} />
            <RecipeRate recipe={details} />
          </div>
        </div>
      </div>

      <div>
        <h2>Notes</h2>
        <p>
          * Nutrition info is a rough estimate based on the ingredients. Note that values may vary from case to case.
        </p>
        <p>* As with all recipes, there is a number of ways you can get things done.</p>
      </div>

      <RecipeSimilar />
    </>
  );
};

export default RecipeDetail;

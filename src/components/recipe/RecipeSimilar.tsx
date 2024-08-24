import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Recipe } from "../../types";
import Loading from "../Loading";
import RecipeCard from "./RecipeCard";

const RecipeSimilar = () => {
  const { id } = useParams();

  const [details, setDetails] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/recipes/list-similarities", { params: { recipe_id: id } }).then((response) => {
      setDetails(response.data.results);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {details.length !== 0 ? (
        <div>
          <h2>You may like these too</h2>
          <div className="row">
            {details.map((item, i) => (
              <div className="col-md-3">
                <RecipeCard key={i} type="default" recipe={item} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RecipeSimilar;

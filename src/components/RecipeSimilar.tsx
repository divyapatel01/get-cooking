import { useEffect, useState } from "react";
import { Recipe } from "../types";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";

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
          {details.slice(0, 5).map((item, i) => (
            <RecipeCard key={i} type="list" recipe={item} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RecipeSimilar;

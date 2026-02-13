import moment from "moment";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { RiThumbUpLine } from "react-icons/ri";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link, useNavigate } from "react-router-dom";

import { Recipe } from "../../types";

const BsClockIcon = BsClock as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const RiThumbUpLineIcon = RiThumbUpLine as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const AiOutlineThunderboltIcon = AiOutlineThunderbolt as React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Props {
  recipe: Recipe;
  type?: "default" | "list" | "carousel" | "featured";
  tag?: string;
}

const RecipeCard = ({ recipe, type = "default", tag }: Props) => {
  const navigate = useNavigate();

  switch (type) {
    case "list":
      return (
        <div className="recipe-card-list">
          <div className="row">
            <div className="col-md-4">
              <div className="recipe-card-media" onClick={() => navigate(`/recipe/${recipe.id}`)}>
                <img className="recipe-card-img" src={recipe.thumbnail_url} alt={recipe.thumbnail_alt_text} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="recipe-card-meta">
                <div className="d-flex flex-wrap" style={{ fontSize: 12 }}>
                  {recipe.total_time_minutes ? (
                    <div className="d-flex align-items-center mb-1 me-3">
                      <BsClockIcon />
                      <span className="ms-2">{recipe.total_time_minutes} mins</span>
                    </div>
                  ) : null}
                  {recipe.show ? (
                    <div className="d-flex align-items-center mb-1">
                      <RiThumbUpLineIcon />
                      <span className="ms-2">{recipe.show.name}</span>
                    </div>
                  ) : null}
                </div>
              </div>
              <h4 className="recipe-card-title" onClick={() => navigate(`/recipe/${recipe.id}`)}>
                {recipe.name}
              </h4>
              <Link to={`/recipe/${recipe.id}`}>Read More</Link>
            </div>
          </div>
        </div>
      );
    case "carousel":
      return (
        <div className="recipe-card-carousel" onClick={() => navigate(`/recipe/${recipe.id}`)}>
          <div className="recipe-card-media">
            <img className="recipe-card-img" src={recipe.thumbnail_url} alt={recipe.thumbnail_alt_text} />
          </div>
          <div className="recipe-card-body">
            <div className="d-flex flex-wrap" style={{ fontSize: 12 }}>
              {recipe.total_time_minutes ? (
                <div className="d-flex align-items-center mb-1 me-3">
                  <BsClockIcon />
                  <span className="ms-2">{recipe.total_time_minutes} mins</span>
                </div>
              ) : null}
              {recipe.show ? (
                <div className="d-flex align-items-center mb-1">
                  <RiThumbUpLineIcon />
                  <span className="ms-2">{recipe.show.name}</span>
                </div>
              ) : null}
            </div>
            <h4 className="recipe-card-title">{recipe.name}</h4>
            <PerfectScrollbar className="recipe-card-desc" dangerouslySetInnerHTML={{ __html: recipe.description }} />
          </div>
          <div className="recipe-card-meta">
            <div className="badge bg-primary">
              <AiOutlineThunderboltIcon style={{ fontSize: 16 }} />
              <span className="ms-2">{tag}</span>
            </div>
          </div>
        </div>
      );
    case "featured":
      return (
        <div className="recipe-card-default">
          <div className="recipe-card-media" onClick={() => navigate(`/recipe/${recipe.id}`)}>
            <img className="recipe-card-img" src={recipe.thumbnail_url} alt={recipe.thumbnail_alt_text} />
          </div>
          <div className="recipe-card-body">
            <div className="d-flex flex-wrap mt-3" style={{ fontSize: 12 }}>
              {recipe.total_time_minutes ? (
                <div className="d-flex align-items-center mb-1 me-3">
                  <BsClockIcon />
                  <span className="ms-2">{recipe.total_time_minutes} mins</span>
                </div>
              ) : null}
              {recipe.show ? (
                <div className="d-flex align-items-center mb-1">
                  <RiThumbUpLineIcon />
                  <span className="ms-2">{recipe.show.name}</span>
                </div>
              ) : null}
            </div>
            <h4 className="recipe-card-title" onClick={() => navigate(`/recipe/${recipe.id}`)}>
              {recipe.name}
            </h4>
            <div className="recipe-card-desc" dangerouslySetInnerHTML={{ __html: recipe.description }} />
          </div>
          <div className="recipe-card-credits mt-3">
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
        </div>
      );
    default:
      return (
        <div className="recipe-card-default">
          <div className="recipe-card-media" onClick={() => navigate(`/recipe/${recipe.id}`)}>
            <img className="recipe-card-img" src={recipe.thumbnail_url} alt={recipe.thumbnail_alt_text} />
          </div>
          <div className="recipe-card-body">
            <div className="d-flex flex-wrap mt-3" style={{ fontSize: 12 }}>
              {recipe.total_time_minutes ? (
                <div className="d-flex align-items-center mb-1 me-3">
                  <BsClockIcon />
                  <span className="ms-2">{recipe.total_time_minutes} mins</span>
                </div>
              ) : null}
              {recipe.show ? (
                <div className="d-flex align-items-center mb-1">
                  <RiThumbUpLineIcon />
                  <span className="ms-2">{recipe.show.name}</span>
                </div>
              ) : null}
            </div>
            <h4 className="recipe-card-title" onClick={() => navigate(`/recipe/${recipe.id}`)}>
              {recipe.name}
            </h4>
            <div className="recipe-card-desc" dangerouslySetInnerHTML={{ __html: recipe.description }} />
          </div>
        </div>
      );
  }
};

export default RecipeCard;

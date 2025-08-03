import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import RecipeCard from "../components/recipe/RecipeCard";
import RecipeSearch from "../components/recipe/RecipeSearch";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { recipeList, recipeTags } from "../store/recipe/actions";

const PAGE_LIMIT = 9;

export default function AllRecipes() {
  const dispatch = useAppDispatch();

  const recipes = useAppSelector((state) => state.recipes.list.results);
  const totalCount = useAppSelector((state) => state.recipes.list.count);
  const isLoading = useAppSelector((state) => state.recipes.list.isLoading);
  const tags = useAppSelector((state) => state.recipes.tags);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCount / PAGE_LIMIT);

  useEffect(() => {
    if (recipes.length === 0 && !isLoading) {
      dispatch(recipeList({ page: currentPage - 1, limit: 9, q: "" }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (tags.list.length === 0 && !tags.isLoading) {
      dispatch(recipeTags());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags]);

  const seasonal = tags.list.filter((t) => t.type === "seasonal");
  const cuisine = tags.list.filter((t) => t.type === "cuisine");
  const meal = tags.list.filter((t) => t.type === "meal");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    let items = [];

    // Helper function to add a page item
    const addPageItem = (page: number) => {
      if (page > 0 && page <= totalPages) {
        items.push(
          <li key={page} className={`page-item ${page === currentPage ? "active" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(page)}>
              {page}
            </button>
          </li>
        );
      }
    };

    // Show the first 3 pages
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      addPageItem(i);
    }

    // Show ellipsis if needed between the first pages and current page
    if (currentPage > 4) {
      items.push(
        <li key="start-ellipsis" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    }

    // Show pages around the current page
    const startPage = Math.max(4, currentPage - 1);
    const endPage = Math.min(totalPages - 3, currentPage + 1);
    for (let i = startPage; i <= endPage; i++) {
      addPageItem(i);
    }

    // Show ellipsis if needed between current page and last pages
    if (currentPage < totalPages - 3) {
      items.push(
        <li key="end-ellipsis" className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    }

    // Show the last 3 pages
    for (let i = Math.max(totalPages - 2, startPage); i <= totalPages; i++) {
      addPageItem(i);
    }

    return items;
  };

  return (
    <div className="container">
      <div className="row">
        {/*  filter */}
        <div className="col-md-3">
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

        {/* listing */}
        <div className="col-md-9">
          <div className="row">
            {recipes.map((r, i) => {
              return (
                <div key={i} className="col-md-4">
                  <RecipeCard recipe={r} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* pagination */}
      <div className="d-flex justify-content-end">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {/* Previous Button */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <GrFormPrevious />
              </button>
            </li>

            {/* Page Numbers */}
            {renderPaginationItems()}

            {/* Next Button */}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <GrFormNext />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

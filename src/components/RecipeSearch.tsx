import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";

type SearchDetail = {
  display: string;
  search_value: string;
  type: string;
};

const RecipeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [details, setDetails] = useState<SearchDetail[]>([]);
  const [selected, setSelected] = useState<SearchDetail>();

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Searching for:", debouncedSearchTerm);
      // Perform your search logic here
      // axios.get("/recipes/auto-complete", { params: { prefix: debouncedSearchTerm } }).then((response) => {
      //   setDetails(response.data.results);
      // });
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (selected) {
      setSearchTerm(selected.display);
    }
  }, [selected]);

  return (
    <div className="position-relative">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          onChange={handleSearchChange}
          value={searchTerm}
        />
        <span className="input-group-text bg-primary" id="basic-addon2">
          <CgSearch />
        </span>
      </div>
      <ul className="auto-search-list">
        {details.map((item, i) => (
          <li key={i} className="auto-search-list-item" onClick={() => setSelected(item)}>
            {item.display}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;

// import axios from "axios";
// import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";

// import useDebounce from "../../hooks/useDebounce";

// type SearchDetail = {
//   display: string;
//   search_value: string;
//   type: string;
// };

const RecipeSearch = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [details, setDetails] = useState<SearchDetail[]>([]);
  // const [selected, setSelected] = useState<SearchDetail>();

  // const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  // useEffect(() => {
  //   if (debouncedSearchTerm && debouncedSearchTerm.length > 0) {
  //     axios.get("recipes/auto-complete", { params: { prefix: debouncedSearchTerm } }).then((response) => {
  //       setDetails(response.data.results);
  //     });
  //   } else {
  //     setDetails([]);
  //   }
  // }, [debouncedSearchTerm]);

  // useEffect(() => {
  //   if (selected) {
  //     setSearchTerm(selected.display);
  //   }
  // }, [selected]);

  return (
    <div className="form-group position-relative">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          list="list-reciepes"
          // onChange={handleSearchChange}
          // value={searchTerm}
        />
        <span className="input-group-text bg-primary" id="basic-addon2">
          <CgSearch />
        </span>
      </div>
      {/* <datalist id="list-reciepes" >
        {details.map((item, i) => (
          <option  key={i} onClick={() => setSelected(item)}>
            {item.display}
          </option>
        ))}
      </datalist> */}
    </div>
  );
};

export default RecipeSearch;

import { useId } from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ searchValue, handleSearchChange }) => {
  const searchInputId = useId();
  return (
    <div className={css.searchWrap}>
      <label className={css.searchLabel} htmlFor={searchInputId}>
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id={searchInputId}
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
/* // _________________________________________________variant 1 */
// const SearchBox = ({ handleSearchChange }) => {
//   return (
//     <div>
//       <input type="text" name="searchName" onChange={handleSearchChange} />
//     </div>
//   );
// };

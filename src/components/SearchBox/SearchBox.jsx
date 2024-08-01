const SearchBox = ({ searchValue, handleSearchChange }) => {
  return (
    <div>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        Find contacts by name
      </label>
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

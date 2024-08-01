const SearchBox = ({ searchValue, handleSearchChange }) => {
  return (
    <div>
      <input
        type="text"
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

const SearchBox = (searchValue, handleSearchChange) => {
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
// const SearchBox = ({ handleSearchChange }) => {
//   return (
//     <div>
//       <input type="text" name="searchName" onChange={handleSearchChange} />
//     </div>
//   );
// };

export default SearchBox;

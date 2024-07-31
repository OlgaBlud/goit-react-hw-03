const SearchBox = ({ handleSearchChange }) => {
  return (
    <div>
      <input type="text" name="searchName" onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBox;
// Поле пошуку значення якого записується у стан (контрольований елемент).

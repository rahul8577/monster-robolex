import './search-box.style.css'

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className='input'>
      <input
        type='search'
        placeholder={placeholder}
        onChange={
          handleChange
        } 
      />
    </div>
  );
}
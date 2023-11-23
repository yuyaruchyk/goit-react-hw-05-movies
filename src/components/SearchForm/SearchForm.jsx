import { FaSearch } from 'react-icons/fa';
import { SearchBar, SearchForm, SearchFormButton, SearchInput } from './SearchForm.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchBar>
      <SearchForm onSubmit={event => {
        event.preventDefault()
          onSubmit(event.target[1].value);
          event.target[1].value = '';
        }}>
        <SearchFormButton type="submit">
            <FaSearch style={{ height: 24, width: 24 }} />
        </SearchFormButton>
        <SearchInput 
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};
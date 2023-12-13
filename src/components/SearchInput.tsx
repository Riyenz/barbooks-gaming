import React from 'react';

import SearchIcon from '@/assets/icons/search.svg?react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, ...props }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <SearchIcon className="search__icon" />
      <input
        className="search__input"
        type="text"
        {...props}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;

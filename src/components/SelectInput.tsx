import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import clsx from 'clsx';

interface SelectInputProps {
  options: string[];
  value?: string | null;
  defaultValue?: string;
  isSearchable?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  defaultValue,
  isSearchable,
  placeholder,
  onChange,
}) => {
  const [searchTerm, setSearchTerm] = useState(value || defaultValue || '');
  const [isOptionsShown, setIsOptionsShown] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const filteredOptions = options.filter(
    (option) =>
      !isSearchable || option.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleOptions = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setIsOptionsShown(!isOptionsShown);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (event.target.value === '') {
      handleChange('');
    }
  };

  const handleChange = (option: string) => {
    onChange(option);
    setSearchTerm(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent<Element, MouseEvent>) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOptionsShown(false);
      }
    };

    document.addEventListener('mousedown', (e) => handleClickOutside(e as any));

    return () => {
      document.removeEventListener('mousedown', (e) =>
        handleClickOutside(e as any),
      );
    };
  }, []);

  return (
    <div ref={selectRef} className="select-input" onClick={toggleOptions}>
      <input
        type="text"
        className={clsx('select-input__input', {
          'select-input__input--readonly': !isSearchable,
        })}
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
      />

      {isOptionsShown && !!filteredOptions.length && (
        <div className="select-input__options">
          {filteredOptions.map((option) => (
            <div
              key={option}
              className={clsx('select-input__option', {
                'select-input__option--selected':
                  option.toLowerCase() === searchTerm.toLowerCase(),
              })}
              onClick={() => handleChange(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {isOptionsShown && !filteredOptions.length && (
        <div className="select-input__options">
          <div className="select-input__option select-input__option--disabled">
            No results found
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectInput;

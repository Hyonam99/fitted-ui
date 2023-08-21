import React, { useEffect, useRef, useState } from 'react';
import { Input, List, ListItem, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { BsBank } from 'react-icons/bs';

const AutocompleteInput = ({ options, onChange }) => {
//   const options = ['Apple', 'Banana', 'Cherry', 'Grapes', 'Orange', 'Peach'];

  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [inputWidth, setInputWidth] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    setInputWidth(inputRef.current.offsetWidth);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter options based on input value
    const filtered = options?.filter(option =>
      option?.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (value) => {
    setInputValue(value?.name);
    onChange(value)
    setFilteredOptions([]); // Clear suggestions after selection
  };

  const handleInputBlur = () => {
    setFilteredOptions([]);
  };

  return (
    <div>
        <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <BsBank color='gray.300' />
            </InputLeftElement>
            <Input
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur }
                placeholder="please select your bank"
                type='text'
            />
        </InputGroup>

      {filteredOptions.length > 0 && (
        <List mt={2} maxH="120px" overflowY="auto" position="absolute" bg='white' width={inputWidth} zIndex={10}>
          {filteredOptions?.map((option) => (
            <ListItem
              key={option?.name}
              p={2}
              cursor="pointer"
              onClick={() => handleOptionClick(option)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {option?.name}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default AutocompleteInput;

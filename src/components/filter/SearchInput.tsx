import { ChangeEvent, FC, useEffect, useState } from 'react';

import './SearchInput.css';
import useDebounce from '../../hooks/useDebounce';

interface SearchInputProps {
    textChange: (text: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ textChange }) => {
    const [inputValue, setInputValue] = useState('');
    const debouncedInputValue = useDebounce(inputValue, 500);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        textChange(debouncedInputValue);
    }, [debouncedInputValue, textChange]);

    return (
        <div className="component-search-input">
            <div>
                <input onChange={handleChange} placeholder="Escribe para buscar un icono" />
            </div>
        </div>
    );
};

export default SearchInput;

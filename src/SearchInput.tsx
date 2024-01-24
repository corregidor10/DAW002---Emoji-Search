import React, { FC, ChangeEvent } from 'react';

import './SearchInput.css';

interface SearchInputProps {
    textChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ textChange }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        textChange(event);
    };

    return (
        <div className="component-search-input">
            <div>
                <input onChange={handleChange} placeholder="Escribe para buscar un icono" />
            </div>
        </div>
    );
};

export default SearchInput;

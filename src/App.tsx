import React, { useState, ChangeEvent } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import { getEmojisByName } from './api/api';
import EmojiResults from './EmojiResults';

const App: React.FC = () => {
    const [filteredEmoji, setFilteredEmoji] = useState<Array<any>>([]);

    const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        if (name) {
            const data = await getEmojisByName(name);
            setFilteredEmoji(data);
        }
    };

    return (
        <div>
            <Header />
            <SearchInput textChange={handleSearchChange} />
            <EmojiResults emojiData={filteredEmoji} />
        </div>
    );
};

export default App;

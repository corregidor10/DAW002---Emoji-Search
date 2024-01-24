import React, { useCallback, useState } from 'react';
import { getEmojisByName } from '../api/api';
import './AppContent.css';
import EmojiResults from './EmojiResults';
import SearchInput from './SearchInput';
import CustomSpinner from './spinner';

const AppContent: React.FC = () => {
    const [filteredEmoji, setFilteredEmoji] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearchChange = useCallback(async (text: string) => {
        if (text.length > 0) {
            try {
                setLoading(true);
                const data = await getEmojisByName(text);
                setFilteredEmoji(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        } else {
            setFilteredEmoji([]);
        }
    }, []);

    return (
        <div className="app_content">
            <SearchInput textChange={handleSearchChange} />
            {!loading && <EmojiResults emojiData={filteredEmoji} />}
            {loading && <CustomSpinner />}
        </div>
    );
};

export default AppContent;

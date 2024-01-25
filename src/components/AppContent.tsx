import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { getEmojisByName } from '../api/api';
import { EmojiData } from '../model/IEmojiData';
import { IPaginatedFilter, emptyPaginatedFilter } from '../model/IPaginatedFilter';
import { IPaginatedResponse, emptyPaginatedResponse } from '../model/IPaginatedResponse';
import './AppContent.css';
import EmojiResults from './results/EmojiResults';
import { Paginator } from './filter/Paginator';
import SearchInput from './filter/SearchInput';
import CustomSpinner from './common/spinner';

const AppContent: React.FC = () => {
    const [paginatedEmojiResponse, setPaginatedEmojiResponse] = useState<IPaginatedResponse<EmojiData>>(emptyPaginatedResponse());
    const [loading, setLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<IPaginatedFilter>(emptyPaginatedFilter());

    const handleSearchChange = useCallback(async (text: string) => {
        setFilter({ offset: 0, name: text });
    }, []);

    const onPrevClick = () => {
        setFilter({ ...filter, offset: filter.offset - 30 });
    };

    const onNextClick = () => {
        setFilter({ ...filter, offset: filter.offset + 30 });
    };

    const showPaginator = useMemo(() => {
        return paginatedEmojiResponse.lastItem > 0 && !loading;
    }, [paginatedEmojiResponse.lastItem, loading]);

    useEffect(() => {
        if (!filter.name) {
            setPaginatedEmojiResponse(emptyPaginatedResponse());
        } else {
            setLoading(true);
            getEmojisByName(filter)
                .then((emojis) => {
                    setPaginatedEmojiResponse(emojis);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [filter]);

    return (
        <div className="app_content">
            <div className="app_filter">
                <SearchInput textChange={handleSearchChange} />
                {showPaginator && <Paginator onPrevClick={onPrevClick} onNextClick={onNextClick} paginatedResult={paginatedEmojiResponse} />}
            </div>
            {!loading && <EmojiResults emojiData={paginatedEmojiResponse.data} />}
            {loading && <CustomSpinner />}
        </div>
    );
};

export default AppContent;

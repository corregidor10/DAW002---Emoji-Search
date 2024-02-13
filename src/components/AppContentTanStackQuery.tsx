import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { getEmojisByName } from '../api/api';
import { EmojiData } from '../model/IEmojiData';
import { IPaginatedFilter, emptyPaginatedFilter } from '../model/IPaginatedFilter';
import { IPaginatedResponse, emptyPaginatedResponse } from '../model/IPaginatedResponse';
import './AppContent.css';
import { Paginator } from './filter/Paginator';
import SearchInput from './filter/SearchInput';
import EmojiResults from './results/EmojiResults';
import { useQuery } from '@tanstack/react-query';

const AppContentTanStackQuery: React.FC = () => {
    const [filter, setFilter] = useState<IPaginatedFilter>(emptyPaginatedFilter());

    const handleSearchChange = useCallback((text: string) => {
        setFilter({ offset: 0, name: text });
    }, []);

    const onPrevClick = () => {
        setFilter({ ...filter, offset: filter.offset - 30 });
    };

    const onNextClick = () => {
        setFilter({ ...filter, offset: filter.offset + 30 });
    };

    const {
        data = emptyPaginatedResponse(),
        isLoading,
        error,
    } = useQuery<IPaginatedResponse<EmojiData>, Error>({
        queryKey: ['emojiData', filter],
        queryFn: () => getEmojisByName(filter),
    });

    const showPaginator = useMemo(() => {
        return data.lastItem > 0 && !isLoading;
    }, [data.lastItem, isLoading]);

    useEffect(() => {
        {
            error && alert(`Error: ${error.message}`);
        }
    }, [error]);

    return (
        <div className="app_content">
            <div className="app_filter">
                <SearchInput textChange={handleSearchChange} />
                {showPaginator && <Paginator onPrevClick={onPrevClick} onNextClick={onNextClick} paginatedResult={data} />}
            </div>
            <EmojiResults emojiData={data?.data} />
        </div>
    );
};

export default AppContentTanStackQuery;

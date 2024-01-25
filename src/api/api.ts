import { EmojiData } from '../model/IEmojiData';
import { IPaginatedFilter } from '../model/IPaginatedFilter';
import { IPaginatedResponse } from '../model/IPaginatedResponse';

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const getEmojisByName = async (filter: IPaginatedFilter): Promise<IPaginatedResponse<EmojiData>> => {
    const { name, offset } = filter;
    const url = `${BASE_URL}?name=${name}&offset=${offset}`;
    const response = await fetch(url, {
        headers: {
            'X-Api-Key': import.meta.env.VITE_API_KEY,
        },
    });
    const data = await response.json();

    return {
        data: data,
        hasPreviousPage: filter.offset > 0,
        hasNextPage: data.length === 30,
        offset: filter.offset,
        firstItem: filter.offset + 1,
        lastItem: filter.offset + data.length,
    };
};

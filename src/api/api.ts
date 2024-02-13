import { EmojiData } from '../model/IEmojiData';
import { IPaginatedFilter } from '../model/IPaginatedFilter';
import { IPaginatedResponse } from '../model/IPaginatedResponse';

const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const getEmojisByName = async (filter: IPaginatedFilter): Promise<IPaginatedResponse<EmojiData>> => {
    const { name, offset } = filter;
    if (!name) {
        return {
            data: [],
            hasPreviousPage: false,
            hasNextPage: false,
            offset: 0,
            firstItem: 0,
            lastItem: 0,
        };
    }

    const params = new URLSearchParams({
        name,
        offset: offset.toString(),
    });

    const url = `${BASE_URL}?${params.toString()}`;
    try {
        const response = await fetch(url, {
            headers: {
                'X-Api-Key': import.meta.env.VITE_API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return {
            data: data,
            hasPreviousPage: filter.offset > 0,
            hasNextPage: data.length === 30,
            offset: filter.offset,
            firstItem: filter.offset + 1,
            lastItem: filter.offset + data.length,
        };
    } catch (error) {
        throw error; // Re-throw the error so it can be handled further up the call stack
    }
};

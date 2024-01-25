export interface IPaginatedResponse<T> {
    data: T[];
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    offset: number;
    firstItem: number;
    lastItem: number;
}

export const emptyPaginatedResponse = <T>(): IPaginatedResponse<T> => ({
    data: [],
    hasPreviousPage: false,
    hasNextPage: false,
    offset: 0,
    firstItem: 0,
    lastItem: 0,
});

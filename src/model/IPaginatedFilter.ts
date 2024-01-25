export interface IPaginatedFilter {
    offset: number;
    name: string;
}

export const emptyPaginatedFilter = (): IPaginatedFilter => ({
    offset: 0,
    name: '',
});

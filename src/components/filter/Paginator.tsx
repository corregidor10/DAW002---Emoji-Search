import React from 'react';
import './Paginator.css';
import { IPaginatedResponse } from '../../model/IPaginatedResponse';

interface PaginatorProps {
    onPrevClick: (offset: number) => void;
    onNextClick: (offset: number) => void;
    paginatedResult: IPaginatedResponse<any>;
}

export const Paginator: React.FC<PaginatorProps> = ({ paginatedResult, onPrevClick, onNextClick }) => {
    const { offset, hasNextPage, firstItem, lastItem, hasPreviousPage } = paginatedResult;
    const handleNext = () => {
        onNextClick(offset + 30);
    };

    const handlePrevious = () => {
        onPrevClick(offset - 30);
    };

    return (
        <div className="paginator-container">
            <button onClick={handlePrevious} disabled={!hasPreviousPage}>
                prev
            </button>
            <span>
                {firstItem} - {lastItem}
            </span>
            <button onClick={handleNext} disabled={!hasNextPage}>
                next
            </button>
        </div>
    );
};

import { StoreProps } from '../Store';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarHalfRoundedIcon from '@mui/icons-material/StarHalfRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import React from 'react';

const renderElementNTimes = (
    count: number,
    element: JSX.Element,
    keyName: string = 'element'
): JSX.Element[] => {
    let result: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
        result.push(
            <React.Fragment key={`${keyName}-${i}`}>{element}</React.Fragment>
        );
    }
    return result;
};

const StoreRating: React.FC<StoreProps> = ({ business: { rating } }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars === 0 ? 0 : 1;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="relative" style={{ bottom: '0.1rem' }}>
            {renderElementNTimes(
                fullStars,
                <StarRoundedIcon className="text-sm sm:text-xl fill-red-600" />,
                'full'
            )}
            {renderElementNTimes(
                halfStars,
                <StarHalfRoundedIcon className="text-sm sm:text-xl fill-red-600" />,
                'half'
            )}
            {renderElementNTimes(
                emptyStars,
                <StarBorderRoundedIcon className="text-sm sm:text-xl fill-red-600" />,
                'empty'
            )}
        </div>
    );
};

export default StoreRating;

import { StoreProps } from '../Store';
import StoreRating from '../StoreRating/StoreRating';

const StoreReviewRating: React.FC<StoreProps> = ({ business }) => {
    const { review_count } = business;
    return (
        <div className="flex flex-wrap gap-x-2 items-center">
            <StoreRating business={business} />
            <div className="text-stone-500">{`${review_count} ${
                review_count === 1 ? 'review' : 'reviews'
            }`}</div>
        </div>
    );
};

export default StoreReviewRating;

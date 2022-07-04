import { Business } from '../../interfaces';
import StoreCategoryPrice from './StoreCategoryPrice/StoreCategoryPrice';
import StoreHeader from './StoreHeader/StoreHeader';
import StorePhoneLocation from './StorePhoneLocation/StorePhoneLocation';
import StoreReviewRating from './StoreReviewRating/StoreReviewRating';

export interface StoreProps {
    business: Business;
}

const Store: React.FC<StoreProps> = ({ business }) => {
    let { name, image_url } = business;
    return (
        <div className="border border-gray-300 rounded-md w-full sm:max-w-172">
            <div className="flex">
                <img
                    className="w-40 sm:w-52 object-cover rounded-l-md"
                    src={image_url}
                    alt={name}
                />
                <div className="flex flex-col gap-y-1 flex-grow text-xs sm:text-sm p-2">
                    <StoreHeader business={business} />
                    <StoreReviewRating business={business} />
                    <StoreCategoryPrice business={business} />
                    <StorePhoneLocation business={business} />
                </div>
            </div>
        </div>
    );
};

export default Store;

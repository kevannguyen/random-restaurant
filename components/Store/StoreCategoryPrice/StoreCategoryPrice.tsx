import { StoreProps } from '../Store';
import CircleIcon from '@mui/icons-material/Circle';

const StoreCategoryPrice: React.FC<StoreProps> = ({
    business: { categories, price },
}) => {
    return (
        <div className="flex flex-wrap gap-x-2 items-center">
            <div className="text-stone-500">{price}</div>
            <CircleIcon
                className="text-xs text-stone-500"
                style={{ fontSize: '0.3rem' }}
            />
            <div className="text text-orange-700">
                {categories.map((c) => c.title).join(', ')}
            </div>
        </div>
    );
};

export default StoreCategoryPrice;

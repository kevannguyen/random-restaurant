import { StoreProps } from '../Store';

const metersToMiles = (meters: number): number => meters / 1609.344;

const StoreHeader: React.FC<StoreProps> = ({
    business: { name, distance },
}) => {
    return (
        <div className="flex flex-wrap justify-between items-center">
            <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
            <div className="text-stone-500">{`${metersToMiles(distance).toFixed(
                2
            )} mi`}</div>
        </div>
    );
};

export default StoreHeader;

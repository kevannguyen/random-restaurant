import { StoreProps } from '../Store';

const formatPhoneNumber = (phoneNumberString: string) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        var intlCode = match[1] ? '+1 ' : '';
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(
            ''
        );
    }
    return phoneNumberString;
};

const StorePhoneLocation: React.FC<StoreProps> = ({
    business: {
        location: {
            city = '',
            address1 = '',
            address2 = '',
            address3 = '',
            state = '',
            zip_code = '',
        },
        phone = '',
    },
}) => {
    const address = [address1, address2, address3]
        .filter((address) => !!address)
        .join(' ');
    const stateZip = [state, zip_code].filter((item) => !!item).join(' ');
    const location = [address, city, stateZip].join(', ');

    return (
        <div className="flex flex-col gap-y-1 text-stone-500">
            <div>{location}</div>
            {!!phone && <div>{formatPhoneNumber(phone)}</div>}
        </div>
    );
};

export default StorePhoneLocation;

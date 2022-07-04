import axios from 'axios';
import Layout from '../components/Layout/Layout';
import Store from '../components/Store/Store';
import { Business } from '../interfaces';

const sampleBusiness: Business = {
    rating: 4,
    price: '$$',
    phone: '+14152520800',
    id: 'E8RJkjfdcwgtyoPMjQ_Olg',
    alias: 'four-barrel-coffee-san-francisco',
    is_closed: false,
    categories: [
        {
            alias: 'coffee',
            title: 'Coffee & Tea',
        },
        {
            alias: 'brunch',
            title: 'Brunch',
        },
        {
            alias: 'breakfast',
            title: 'Breakfast',
        },
    ],
    review_count: 1738,
    name: 'Four Barrel Coffee -- 0',
    url: 'https://www.yelp.com/biz/four-barrel-coffee-san-francisco',
    coordinates: {
        latitude: 37.7670169511878,
        longitude: -122.42184275,
    },
    image_url:
        'http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg',
    location: {
        city: 'San Francisco',
        country: 'US',
        address2: '',
        address3: '',
        state: 'CA',
        address1: '375 Valencia St',
        zip_code: '94103',
    },
    distance: 2624.23,
    transactions: ['pickup', 'delivery'],
};

const IndexPage: React.FC = () => {
    const fetchData = async () => {
        const response = await axios({
            method: 'get',
            url: '/api/search',
        });
        console.log(response);
    };

    fetchData();

    return (
        <Layout>
            <Store business={sampleBusiness} />
        </Layout>
    );
};

export default IndexPage;

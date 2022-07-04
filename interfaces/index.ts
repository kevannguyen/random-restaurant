export type User = {
    id: number;
    name: string;
};

// ****************** //
// Yelp API Interface //
// ****************** //

export interface YelpBusinessSearch {
    total: number;
    businesses: Business[];
    region: Region;
}

export interface Business {
    rating: number;
    price: string;
    phone: string;
    id: string;
    alias: string;
    is_closed: boolean;
    categories: Category[];
    review_count: number;
    name: string;
    url: string;
    coordinates: Center;
    image_url: string;
    location: Location;
    distance: number;
    transactions: string[];
}

export interface Category {
    alias: string;
    title: string;
}

export interface Center {
    latitude: number;
    longitude: number;
}

export interface Location {
    city: string;
    country: string;
    address2: string;
    address3: string;
    state: string;
    address1: string;
    zip_code: string;
}

export interface Region {
    center: Center;
}

import React from 'react';
import { AppProps } from 'next/app';

import 'normalize.css/normalize.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="app-main bg-white h-screen">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;

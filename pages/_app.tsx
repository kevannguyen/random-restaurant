import React from 'react';
import { AppProps } from 'next/app';

import 'normalize.css/normalize.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
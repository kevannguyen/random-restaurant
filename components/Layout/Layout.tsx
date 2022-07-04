import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Navbar/Navbar';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'Random Restaurant' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Header />
        <div className="p p-2">{children}</div>
    </div>
);

export default Layout;

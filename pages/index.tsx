import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const IndexPage = () => (
    <Layout>
        <h1 className="text-blue-800">Hello Next.js 👋</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
);

export default IndexPage;

import { NextApiRequest, NextApiResponse } from 'next';
import { sampleYelpData } from '../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.status(200).json(sampleYelpData);
    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;

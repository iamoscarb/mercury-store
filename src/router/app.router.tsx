import { MercuryStoreLayout } from '@/mercuryStore/layouts/MercuryStoreLayout';
import { HomePage } from '@/mercuryStore/pages/home/HomePage';
import { createHashRouter } from 'react-router';

export const appRouter = createHashRouter([
    {
        path: '/',
        element: <MercuryStoreLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '*',
                element: <>
                    <p>PRODUCTOS</p>
                </>
            }
        ]

    }
])
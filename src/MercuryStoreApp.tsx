import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.router'

export const MercuryStoreApp = () => {
    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

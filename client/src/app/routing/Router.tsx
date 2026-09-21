import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { ROUTES } from "@/app/routing/routes"
import { BaseLayout } from "@/app/layout/BaseLayout";

const Home = lazy(() => import("@/pages/home").then(module => ({ default: module.Home })));

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <BaseLayout/> ,
        children: [
            {
                path: ROUTES.HOME,
                element: (
                <Suspense fallback={<div className="p-4 text-center text-gray-500">Загрузка...</div>}>
                    <Home />
                </Suspense>
                ),
            },
            {
                path: "*",
                element: <Navigate to={ROUTES.HOME} replace />,
            },
        ]
    }
])
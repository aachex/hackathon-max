import { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { ROUTES } from "@/app/routing/routes"
import { BaseLayout } from "@/app/layout/BaseLayout";

const CheckList = lazy(() => import("@/entities/examination/index").then(module => ({ default: module.CheckList })));
const Requirement = lazy(() => import("@/entities/examination/index").then(module => ({ default: module.Requirement })));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/> ,
        children: [
            {
                // При переходе на пустой корень "/" автоматически редиректим на чек-лист
                index: true,
                element: <Navigate to={ROUTES.CHECKLIST} replace />,
            },
            {
                path: ROUTES.CHECKLIST,element: (
                <Suspense fallback={<div className="p-4 text-center text-gray-500">Загрузка...</div>}>
                    <CheckList />
                </Suspense>),
            },
            {
                path: ROUTES.REQUIREMENT,element: (
                <Suspense fallback={<div className="p-4 text-center text-gray-500">Загрузка...</div>}>
                    <Requirement />
                </Suspense>),
            },
            {
                path: "*",
                element: <Navigate to={ROUTES.CHECKLIST} replace />,
            },
        ]
    }
])
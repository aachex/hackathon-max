import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";

import { router } from "@/app/routing/Router";
import { queryClient } from "@/app/providers/query-client";

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};
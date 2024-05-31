import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";
import AboutUs from "../components/AboutUs";
import Error from "../components/Error";
import ContactUs from "../components/ContactUs";
import RestaurantMenu from "../components/RestaurantMenu";
import Cart from "../components/Cart";
import RestaurantByFood from "../components/RestaurantByFood";

const Groceries = lazy(() => import("../components/Groceries"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: <AboutUs />,
                errorElement: <Error />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
                errorElement: <Error />,
            },
            {
                path: "/groceries",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Groceries />
                    </Suspense>
                ),
                errorElement: <Error />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Cart />,
                errorElement: <Error />,
            },
            {
                path: "/restaurantByFood/:id",
                element: <RestaurantByFood />,
                errorElement: <Error />,
            },
        ],
    },
]);

export default appRouter;

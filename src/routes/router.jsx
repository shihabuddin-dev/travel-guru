import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import News from "../pages/news/News";
import Blogs from "../pages/blog/blogs";
import Destination from "../pages/destination/destination";
import Contact from "../pages/contact/Contact";
import Home from "../components/Home";
import Login from "../pages/login/Login";
import Booking from "../pages/booking/Booking";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/news', Component: News },
            { path: '/destination', Component: Destination },
            { path: '/blogs', Component: Blogs },
            { path: '/contact', Component: Contact },
            { path: '/login', Component: Login },
            { path: '/booking', Component: Booking },
        ]
        // private routes 

        // {
        //     path: '/profile',
        //     element:
        //         <PrivateRoutes>
        //             <Profile />
        //         </PrivateRoutes>
        // },
        // {
        //     path: '/news',
        //     element:
        //         <PrivateRoutes>
        //             <News />
        //         </PrivateRoutes>
        // },

    },

]);

export default router;
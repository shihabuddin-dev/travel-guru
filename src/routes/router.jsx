import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import News from "../pages/news/News";
import Blogs from "../pages/blog/blogs";
import Destination from "../pages/destination/destination";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,

//  path: '/about', Component: About },

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
    { path: '/news', Component: News },
    { path: '/destination', Component: Destination },
    { path: '/blogs', Component: Blogs },
    { path: '/contact', Component: Contact },
]);

export default router;
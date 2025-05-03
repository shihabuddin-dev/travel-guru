import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
// import About from "../pages/about/About";
// import Blogs from "../pages/blogs/Blogs";
// import SignIn from "../pages/signin/SignIn";
// import SignUp from "../pages/signUp/SignUp";
// import PrivateRoutes from "./PrivateRoutes";
// import Profile from "../pages/profile/Profile";
// import News from "../pages/news/News";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            // { path: '/signin', Component: SignIn },
            // { path: '/signup', Component: SignUp },
            // { path: '/about', Component: About },
            // { path: '/blogs', Component: Blogs },

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
        ]
    },
]);

export default router;
import ACoursePage from "../components/ACoursePage";
import CommunityPage from "../components/CommunityPage";
import CoursesPage from "../components/CoursesPage";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage/index.jsx";
import RegisterPage from "../components/RegisterPage";

export const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        path: "/courses",
        exact: true,
        component: CoursesPage,
    },
    {
        path: "/community",
        exact: true,
        component: CommunityPage,
    },
    {
        path: "/account/login",
        exact: true,
        component: LoginPage,
    },
    {
        path: "/account/register",
        exact: true,
        component: RegisterPage,
    },
    {
        path: "/courses/:courseName",
        exact: true,
        component: ACoursePage,
    },
];

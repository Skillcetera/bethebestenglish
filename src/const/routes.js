import ACoursePage from "../components/ACoursePage";
import CommunityPage from "../components/CommunityPage";
import CoursesPage from "../components/CoursesPage";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";

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
    path: "/login",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/courses/:courseName",
    exact: true,
    component: ACoursePage,
  },
];

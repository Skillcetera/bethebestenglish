import Navigation from "../../components/Navigation";
import "./App.css";
import { routes } from "../../const/routes";
import ContentRoute from "../../components/ContentRoute";
import { useEffect } from "react";
import { changeThemeBySection } from "../../util/supportFunction";
import "./responsive.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
import * as authActionCraetor from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../Auth";
function App() {
    const sectionList = document.getElementsByClassName("item");
    const history = useHistory();
    const matchLgDevice = useMediaQuery("(max-width: 1280px)");
    const isLogin = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();
    const setUp = () => {
        //set with
        if (matchLgDevice) {
            const courseElementWidth =
                document.getElementsByClassName("img")?.[0]?.clientWidth;
            if (courseElementWidth) {
                let widthFit = (3 * courseElementWidth) / 5;
                document.documentElement.style.setProperty(
                    "--box-height",
                    `${widthFit}px`
                );
            }
        }
        //check cookie for login user
        let cookie;
        const cookieList = document.cookie.split(";");
        cookieList.forEach((element) => {
            const cookieString = element.split("=");
            if (cookieString[0].trim() === "x-auth-token") {
                cookie = cookieString[1];
            }
        });
        if (cookie) {
            dispatch(authActionCraetor.setLogin(true));
        }
    };

    window.addEventListener("resize", () => {
        setUp();
    });
    useEffect(() => {
        setUp();
    });
    useEffect(() => {
        for (let i = 0; i < sectionList.length; i++) {
            const e = sectionList[i];
            if (e.classList.contains("active")) {
                changeThemeBySection(e);
            }
        }
        history.listen((location) => {
            const { pathname } = location;
            let currentSection = pathname.split("/")[1].toUpperCase();
            if (currentSection === "") {
                currentSection = "HOME";
            }
            for (let i = 0; i < sectionList.length; i++) {
                const e = sectionList[i];
                const text = e.innerText;
                if (text === currentSection) {
                    changeThemeBySection(e);
                }
            }
        });
    }, [sectionList, history]);
    const renderContent = () => {
        let result;
        result = routes.map((route) => {
            return <ContentRoute route={route} />;
        });
        return result;
    };
    return (
        <div className="container-fluid">
            <Navigation />
            <Auth>{isLogin}</Auth>
            {renderContent()}
        </div>
    );
}

export default App;

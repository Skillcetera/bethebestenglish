import Navigation from "../../components/Navigation";
import "./App.css";
import { routes } from "../../const/routes";
import ContentRoute from "../../components/ContentRoute";
import { useEffect } from "react";
import { changeThemeBySection } from "../../util/supportFunction";
import "./responsive.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
function App() {
    const sectionList = document.getElementsByClassName("item");
    const history = useHistory();
    const matchLgDevice = useMediaQuery("(max-width: 1280px)");
    const setUp = () => {
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
            {renderContent()}
        </div>
    );
}

export default App;

import Navigation from "../../components/Navigation";
import "./App.css";
import { routes } from "../../const/routes";
import ContentRoute from "../../components/ContentRoute";
import { useEffect } from "react";
import { changeThemeBySection } from "../../util/supportFunction";
import "./responsive.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
function App() {
    const sectionList = document.getElementsByClassName("item");

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
    }, [sectionList]);
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

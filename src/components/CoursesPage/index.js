import React from "react";
import { Grid } from "@material-ui/core";
import WelcomeSection from "../WelcomeSection";
import "./style.css";
import { coursesData } from "../../const/CoursesData";
import CourseSectionOfCoursePage from "../CourseSectionOfCoursePage";
function CoursesPage() {
    return (
        <Grid container className="homepage-wrapper courses-page">
            <WelcomeSection />
            <div className="section-line"></div>
            <CourseSectionOfCoursePage
                data={coursesData}
                title="Danh sách khóa học"
            />
            <div className="section-line"></div>
            <div className="logo">best</div>
        </Grid>
    );
}

export default CoursesPage;

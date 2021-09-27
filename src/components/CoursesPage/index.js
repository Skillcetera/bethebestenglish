import React from "react";
import { Grid } from "@material-ui/core";
import WelcomeSection from "../WelcomeSection";
import "./style.css";
import CourseSectionOfCoursePage from "../CourseSectionOfCoursePage";
import { useSelector } from "react-redux";
function CoursesPage() {
    const courseList = useSelector((state) => state.courses.courseList);

    return (
        <Grid container className="homepage-wrapper courses-page">
            <WelcomeSection />
            <div className="section-line"></div>
            <CourseSectionOfCoursePage
                data={courseList}
                title="Danh sách khóa học"
            />
            <div className="section-line"></div>
            <div className="logo">best</div>
        </Grid>
    );
}

export default CoursesPage;

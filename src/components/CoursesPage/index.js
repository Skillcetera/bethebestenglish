import React from "react";
import { Grid } from "@material-ui/core";
import WelcomeSection from "../WelcomeSection";
import CourseSection from "../CourseSection";
import "./style.css";
import { coursesData } from "../../const/CoursesData";
function CoursesPage() {
  return (
    <Grid container className="homepage-wrapper courses-page">
      <WelcomeSection />
      <div className="section-line"></div>
      <CourseSection data={coursesData} title="Danh sách khóa học" />
      <div className="section-line"></div>
      <div className="logo">best</div>
    </Grid>
  );
}

export default CoursesPage;

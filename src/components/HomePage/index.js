import React from "react";
import { Grid } from "@material-ui/core";
import WelcomeSection from "../WelcomeSection";
import "./style.css";
import FounderSection from "../FounderSection";
import CourseSection from "../CourseSection";
import AchievementPage from "../AchievementPage";
import CourseBenefits from "../CourseBenefits";
import LearnerCommentPage from "../LeanerCommentPage";
import { highLightCourse } from "../../const/CoursesData";
function HomePage() {
  return (
    <Grid container className="homepage-wrapper">
      <WelcomeSection />
      <div className="section-line"></div>
      <FounderSection />
      <AchievementPage />
      <div className="section-line"></div>
      <CourseSection data={highLightCourse} title="Khóa học Input" />
      <div className="section-line"></div>
      <CourseBenefits />
      <div className="section-line"></div>
      <LearnerCommentPage />
      <div className="section-line"></div>
      <div className="logo">best</div>
    </Grid>
  );
}

export default HomePage;

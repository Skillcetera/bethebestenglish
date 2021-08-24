import { Grid } from "@material-ui/core";
import React from "react";
// import BuyNowButton from "../BuyNowButton";
import CourseService from "../CourseService";
import IntroductionOfCourse from "../IntroductionOfCourse";
import Testimonials from "../Testimonials";
import "./style.css";
function ACoursePage(props) {
    // const { courseName } = props.match.params;

    return (
        <Grid container className="ACourse-Page">
            <IntroductionOfCourse />
            <div className="section-line"></div>
            <CourseService />
            <div className="section-line"></div>
            <Testimonials />
            {/* <BuyNowButton /> */}
            <div className="section-line"></div>
            <div className="logo">best</div>
        </Grid>
    );
}

export default ACoursePage;

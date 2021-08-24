import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getIndexByNameOfCourse } from "../../util/supportFunction";
import CourseService from "../CourseService";
import IntroductionOfCourse from "../IntroductionOfCourse";
import Testimonials from "../Testimonials";
import "./style.css";
function ACoursePage(props) {
    const { courseName } = props.match.params;
    const courseList = useSelector((state) => state.courses.courseList);
    const index = getIndexByNameOfCourse(courseList, courseName);
    const { description, courseServices, testimonials, bigImage } =
        courseList[index];

    return (
        <Grid container className="ACourse-Page">
            <IntroductionOfCourse
                name={courseName}
                description={description}
                bigImage={bigImage}
            />
            <div className="section-line"></div>
            <CourseService data={courseServices} />
            <div className="section-line"></div>
            <Testimonials data={testimonials} />
            <div className="section-line"></div>
            <div className="logo">best</div>
        </Grid>
    );
}

export default ACoursePage;

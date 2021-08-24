import React, { Fragment } from "react";
import CourseBox from "../CourseBox";
import "./style.css";

function CourseSectionOfCoursePage(props) {
    const { data, title } = props;

    let renderCourses = () => {
        let result;
        result = data.map((course, index) => {
            const { courseAvatar, name } = course;
            return <CourseBox img={courseAvatar} name={name} key={index} />;
        });
        return result;
    };
    return (
        <Fragment>
            <div className="title">{title}</div>
            <div className="course-section">{renderCourses()}</div>
        </Fragment>
    );
}

export default CourseSectionOfCoursePage;

import React, { Fragment } from "react";
import CourseBox from "../CourseBox";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function CourseSectionOfHomePage(props) {
    const { data, title } = props;
    const isMobile = useMediaQuery("(max-width: 600px)");
    let renderCourses = () => {
        let result;
        if (isMobile) {
            result = data.map((course, index) => {
                const { img, name } = course;
                if (index < 3) {
                    return <CourseBox img={img} name={name} key={index} />;
                }
                return null;
            });
        } else {
            result = data.map((course, index) => {
                const { img, name } = course;
                return <CourseBox img={img} name={name} key={index} />;
            });
        }
        return result;
    };
    return (
        <Fragment>
            <div className="title">{title}</div>
            <div className="course-section">{renderCourses()}</div>
        </Fragment>
    );
}

export default CourseSectionOfHomePage;

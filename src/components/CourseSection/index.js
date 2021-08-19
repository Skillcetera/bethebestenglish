import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import CourseBox from "../CourseBox";
import "./style.css";

function CourseSection(props) {
  const { data, title } = props;
  let renderCourses = () => {
    let result;
    result = data.map((course) => {
      const { img, name } = course;

      return <CourseBox img={img} name={name} />;
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

export default CourseSection;

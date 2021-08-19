import React from "react";
import { Link } from "react-router-dom";

function CourseBox(props) {
  const { img, name } = props;
  return (
    <div className="course-box-wrapper">
      <Link to={`/courses/${name}`} className="course-box">
        <div
          className="img"
          style={{
            backgroundImage: `url(${img})`,
          }}
        ></div>
      </Link>
    </div>
  );
}

export default CourseBox;

/* <div className="course-box">
        <Link to={`/courses/${name}`}>
          <img src={img} alt="course" />
        </Link>
      </div> */

/* <img src={img} alt="course" /> */

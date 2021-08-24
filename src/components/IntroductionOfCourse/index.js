import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function IntroductionOfCourse(props) {
    const { name, description, bigImage } = props;
    return (
        <Grid container className="introduce-section">
            <Grid item xs={12} lg={6} className="left-side">
                <div className="text-base lg:text-3xl course-name">
                    {name.toUpperCase()}
                </div>
                <div className="text-sm course-description lg:text-lg ">
                    {description}
                </div>
            </Grid>
            <Grid item xs={12} lg={6} className="right-side">
                <div className="course-image">
                    <img src={bigImage} alt="input" />
                </div>
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
            <Grid item xs={12} lg={6} className="register-button-wrapper">
                {/* <a
                    className="register-now"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd5hcJvXw7sYjTjDGJqRmNoTmuBb4ElK_2rWoxaktWoVXELig/viewform"
                > */}
                <Link to={`${name}/buy`} className="register-now">
                    <Button
                        variant="contained"
                        color="primary"
                        className="text-sm learn-more-button lg:text-lg"
                    >
                        Đăng kí ngay
                    </Button>
                </Link>
                {/* </a> */}
            </Grid>
        </Grid>
    );
}

export default IntroductionOfCourse;

import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
function IntroductionOfCourse() {
    return (
        <Grid container className="introduce-section">
            <Grid item xs={12} lg={6} className="left-side">
                <div className="text-base lg:text-3xl course-name">INPUT</div>
                <div className="text-sm course-description lg:text-lg ">
                    "INPUT 2020" là một khóa học đặc biệt dành riêng cho các bạn
                    sinh viên, với hệ thống lý thuyết cô đọng, trọng tâm nhằm
                    giúp cho các bạn sinh viên nhanh chóng lấy lại kiến thức nền
                    tảng một cách hiệu quả nhất. Hơn thế nữa, “INPUT 2020” còn
                    là khoá học cung cấp kĩ năng hàng đầu cho sinh viên học tập
                    trong môi tr
                </div>
            </Grid>
            <Grid item xs={12} lg={6} className="right-side">
                <div className="course-image">
                    <img src="../images/input.jpg" alt="input" />
                </div>
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
            <Grid item xs={12} lg={6} className="register-button-wrapper">
                <a
                    className="register-now"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd5hcJvXw7sYjTjDGJqRmNoTmuBb4ElK_2rWoxaktWoVXELig/viewform"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        className="text-sm learn-more-button lg:text-lg"
                    >
                        Đăng kí ngay
                    </Button>
                </a>
            </Grid>
        </Grid>
    );
}

export default IntroductionOfCourse;

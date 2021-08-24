import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import "./style.css";
import DoneIcon from "@material-ui/icons/Done";
function CourseService(props) {
    const { data } = props;
    const renderMobile = () => {
        let result;
        result = data.map((service) => (
            <Grid item xs={12} className="flex mb-2 ">
                <DoneIcon className="text-xl " />
                <div className="ml-4 text-sm">{service.title}</div>
            </Grid>
        ));
        return result;
    };
    const renderDesktop = () => {
        let result;
        result = data.map((service) => (
            <Grid item xs={12} lg={4} className="a-service">
                <img src={service.img} alt="service" />
                <div className="description">{service.title}</div>
            </Grid>
        ));

        return result;
    };
    const isMobile = useMediaQuery("(max-width: 600px)");
    if (isMobile) {
        return (
            <Grid container className="">
                <div className="title">Lợi ích khóa học</div>
                <div className="flex flex-col ">{renderMobile()}</div>
            </Grid>
        );
    } else {
        return (
            <Grid container className="course-service-section">
                <div className="title">Lợi ích khóa học</div>
                <div className="service-wrapper">{renderDesktop()}</div>
            </Grid>
        );
    }
}

export default CourseService;

import { Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import "./style.css";
import DoneIcon from "@material-ui/icons/Done";
function CourseService() {
    const isMobile = useMediaQuery("(max-width: 600px)");
    if (isMobile) {
        return (
            <Grid container className="">
                <div className="title">Lợi ích khóa học</div>
                <div className="flex flex-col ">
                    <Grid item xs={12} className="flex mt-4 mb-2 ">
                        <DoneIcon className="text-xl " />
                        <div className="ml-4 text-sm">Cải thiện phát âm</div>
                    </Grid>
                    <Grid item xs={12} className="flex mb-2 ">
                        <DoneIcon className="text-xl " />
                        <div className="ml-4 text-sm">Kiến thức vững</div>
                    </Grid>
                    <Grid item xs={12} className="flex mb-2 ">
                        <DoneIcon className="text-xl " />
                        <div className="ml-4 text-sm">Tăng sự tự tin</div>
                    </Grid>
                    <Grid item xs={12} className="flex mb-2 ">
                        <DoneIcon className="text-xl " />
                        <div className="ml-4 text-sm">Nghe, nói, đọc, viết</div>
                    </Grid>
                    <Grid item xs={12} className="flex mb-2 ">
                        <DoneIcon className="text-xl " />
                        <div className="ml-4 text-sm">Áp dụng thực tế</div>
                    </Grid>
                    <Grid item xs={12} className="flex mb-2 ">
                        <DoneIcon className="text-xl " />
                        <div className="ml-4 text-sm">Kĩ năng tự học</div>
                    </Grid>
                </div>
            </Grid>
        );
    } else {
        return (
            <Grid container className="course-service-section">
                <div className="title">Lợi ích khóa học</div>
                <div className="service-wrapper">
                    <Grid item xs={12} lg={4} className="a-service">
                        <img src="../images/service.jpg" alt="service" />
                        <div className="description">Cải thiện phát âm</div>
                    </Grid>
                    <Grid item xs={12} lg={4} className="a-service">
                        <img src="../images/service1.jpg" alt="service" />
                        <div className="description">Kiến thức vững</div>
                    </Grid>
                    <Grid item xs={12} lg={4} className="a-service">
                        <img src="../images/service2.jpg" alt="service" />
                        <div className="description">Tăng sự tự tin</div>
                    </Grid>
                    <Grid item xs={12} lg={4} className="a-service">
                        <img src="../images/service3.jpg" alt="service" />
                        <div className="description">Nghe, nói, đọc, viết</div>
                    </Grid>
                    <Grid item xs={12} lg={4} className="a-service">
                        <img src="../images/service4.jpg" alt="service" />
                        <div className="description">Áp dụng thực tế</div>
                    </Grid>
                    <Grid item xs={12} lg={4} className="a-service">
                        <img src="../images/service4.jpg" alt="service" />
                        <div className="description">Kĩ năng tự học</div>
                    </Grid>
                </div>
            </Grid>
        );
    }
}

export default CourseService;

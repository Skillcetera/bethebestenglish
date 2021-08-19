import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
function CourseService() {
  return (
    <Grid container className="course-service-section">
      <div className="title">Lợi ích khóa học</div>
      <div className="service-wrapper">
        <Grid item xs={6} lg={4} className="a-service">
          <img src="../images/service.jpg" alt="service" />
          <div className="description">Cải thiện phát âm</div>
        </Grid>
        <Grid item xs={6} lg={4} className="a-service">
          <img src="../images/service1.jpg" alt="service" />
          <div className="description">Kiến thức vững</div>
        </Grid>
        <Grid item xs={6} lg={4} className="a-service">
          <img src="../images/service2.jpg" alt="service" />
          <div className="description">Tăng sự tự tin</div>
        </Grid>
        <Grid item xs={6} lg={4} className="a-service">
          <img src="../images/service3.jpg" alt="service" />
          <div className="description">Nghe, nói, đọc, viết</div>
        </Grid>
        <Grid item xs={6} lg={4} className="a-service">
          <img src="../images/service4.jpg" alt="service" />
          <div className="description">Áp dụng thực tế</div>
        </Grid>
        <Grid item xs={6} lg={4} className="a-service">
          <img src="../images/service4.jpg" alt="service" />
          <div className="description">Kĩ năng tự học</div>
        </Grid>
      </div>
    </Grid>
  );
}

export default CourseService;

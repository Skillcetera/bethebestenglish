import React from "react";
import "./style.css";
import WorkIcon from "@material-ui/icons/Work";
import FastForwardIcon from "@material-ui/icons/FastForward";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import FavoriteIcon from "@material-ui/icons/Favorite";
function CourseBenefits() {
  return (
    <div className="course-benefit-section">
      <div className="title">Vì sao chọn Best ?</div>
      <div className="benefit-wrapper">
        <div className="a-benefit-box">
          <WorkIcon className="icon" />
          <div className="detail-text">Job opportunity</div>
        </div>
        <div className="a-benefit-box">
          <FastForwardIcon className="icon" />
          <div className="detail-text">Accelerated learning</div>
        </div>
        <div className="a-benefit-box">
          <ThumbUpIcon className="icon" />
          <div className="detail-text">Producting</div>
        </div>
        <div className="a-benefit-box">
          <SettingsIcon className="icon" />
          <div className="detail-text">Life Coaching</div>
        </div>
      </div>
      <div className="below-icon-section">
        <div className="a-total-wrapper">
          <PeopleAltIcon className="a-icon" />
          <div className="detail-wrapper">
            <div className="number">300</div>
            <div className="category-name">Learner</div>
          </div>
        </div>
        <div className="a-total-wrapper">
          <VideoLibraryIcon className="a-icon" />
          <div className="detail-wrapper">
            <div className="number">6</div>
            <div className="category-name">Courses</div>
          </div>
        </div>
        <div className="a-total-wrapper">
          <FavoriteIcon className="a-icon" />
          <div className="detail-wrapper">
            <div className="number">350</div>
            <div className="category-name">Exellent Review</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseBenefits;

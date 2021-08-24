import React from "react";
import "./style.css";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
function WelcomeSection() {
    return (
        <Grid container className="welcome-page">
            <Grid item xs={12} lg={7} className="left-side">
                <div className="logo">best</div>
                <div className="welcome-text">
                    <div className="text-lg tracking-wide lg:text-4xl">
                        Learning English is tough
                    </div>
                    <div className="text-lg tracking-wide lg:text-4xl">
                        Learning you've just found
                    </div>
                    <div className="text-lg tracking-wide lg:text-4xl">
                        Be The Best English
                    </div>
                    <div className="icon-wrapper">
                        <ArrowDropDownCircleOutlinedIcon className="text-4xl lg:text-6xl" />
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} lg={5} className="right-side">
                <Link className="register-now" to="/courses">
                    <Button
                        variant="contained"
                        color="primary"
                        className="text-base font-semibold learn-more-button"
                    >
                        Nhận tư vấn tại đây
                    </Button>
                </Link>
                <div className="line"></div>
                <div className="social-icon-wrapper">
                    <a
                        href="https://www.facebook.com/bethebestenglish/"
                        className="social-icon"
                    >
                        <FacebookIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/bethebestenglish/"
                        className="social-icon"
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCFYw2Vrb6qjdflT5kA_BZhA"
                        className="social-icon"
                    >
                        <YouTubeIcon />
                    </a>
                    <a
                        href="https://www.tiktok.com/@tenpism?lang=en"
                        className="social-icon"
                    >
                        <svg
                            height="35px"
                            viewBox="-32 0 512 512"
                            width="35px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m432.734375 112.464844c-53.742187 0-97.464844-43.722656-97.464844-97.464844 0-8.285156-6.71875-15-15-15h-80.335937c-8.285156 0-15 6.714844-15 15v329.367188c0 31.59375-25.703125 57.296874-57.300782 57.296874-31.59375 0-57.296874-25.703124-57.296874-57.296874 0-31.597657 25.703124-57.300782 57.296874-57.300782 8.285157 0 15-6.714844 15-15v-80.335937c0-8.28125-6.714843-15-15-15-92.433593 0-167.632812 75.203125-167.632812 167.636719 0 92.433593 75.199219 167.632812 167.632812 167.632812 92.433594 0 167.636719-75.199219 167.636719-167.632812v-145.792969c29.855469 15.917969 63.074219 24.226562 97.464844 24.226562 8.285156 0 15-6.714843 15-15v-80.335937c0-8.28125-6.714844-15-15-15zm-15 79.714844c-32.023437-2.664063-62.433594-13.851563-88.707031-32.75-4.566406-3.289063-10.589844-3.742188-15.601563-1.171876-5.007812 2.5625-8.15625 7.71875-8.15625 13.347657v172.761719c0 75.890624-61.746093 137.632812-137.636719 137.632812-75.890624 0-137.632812-61.742188-137.632812-137.632812 0-70.824219 53.773438-129.328126 122.632812-136.824219v50.8125c-41.015624 7.132812-72.296874 42.984375-72.296874 86.011719 0 48.136718 39.160156 87.300781 87.296874 87.300781 48.140626 0 87.300782-39.164063 87.300782-87.300781v-314.367188h51.210937c6.871094 58.320312 53.269531 104.71875 111.589844 111.589844zm0 0" />
                        </svg>
                    </a>
                </div>
            </Grid>
        </Grid>
    );
}

export default WelcomeSection;

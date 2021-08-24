import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
function Testimonials() {
    return (
        <Grid container className="testimonials-section">
            <div className="title">testimonials</div>
            <Grid container spacing={6} className="comment-section">
                <Grid item xs={12} lg={4} className="comment-wrapper">
                    <div className="information-of-learner">
                        <img src="../images/learner/tri.jpg" alt="tri" />
                        <div className="text-lg tracking-wide name-of-learner">
                            Nguyen Van A
                        </div>
                    </div>
                    <div className="text-sm tracking-normal text-left lg:text-base comment">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled
                    </div>
                </Grid>
                <Grid item xs={12} lg={4} className="comment-wrapper">
                    <div className="information-of-learner">
                        <img src="../images/learner/duc.jpg" alt="tri" />
                        <div className="text-lg tracking-wide name-of-learner">
                            Nguyen Van B
                        </div>
                    </div>
                    <div className="text-sm tracking-normal text-left lg:text-base comment">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled
                    </div>
                </Grid>
                <Grid item xs={12} lg={4} className="comment-wrapper">
                    <div className="information-of-learner">
                        <img src="../images/learner/loc.jpg" alt="tri" />
                        <div className="text-lg tracking-wide name-of-learner">
                            Nguyen Van C
                        </div>
                    </div>
                    <div className="text-sm tracking-normal text-left lg:text-base comment">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Testimonials;

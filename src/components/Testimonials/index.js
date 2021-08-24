import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
function Testimonials(props) {
    const { data } = props;
    const renderComment = () => {
        let result;
        result = data.map((comment) => (
            <Grid item xs={12} lg={4} className="comment-wrapper">
                <div className="information-of-learner">
                    <img src={comment.avatar} alt="tri" />
                    <div className="text-lg tracking-wide name-of-learner">
                        {comment.name}
                    </div>
                </div>
                <div className="text-sm tracking-normal text-left lg:text-base comment">
                    {comment.comment}
                </div>
            </Grid>
        ));
        return result;
    };
    return (
        <Grid container className="testimonials-section">
            <div className="title">testimonials</div>
            <Grid container spacing={6} className="comment-section">
                {renderComment()}
            </Grid>
        </Grid>
    );
}

export default Testimonials;

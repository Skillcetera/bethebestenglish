import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import "./style.css";
function FounderSection() {
    useEffect(() => {
        const valueDifferenceForDeg = 0;
        const valueDifferenceForWidth = 30;
        let kElement = document.getElementsByClassName("k-letter")[0];
        let aElement = document.getElementsByClassName("a-letter")[0];
        let pElement = document.getElementsByClassName("p-letter")[0];
        let kLine = document.getElementsByClassName("k-line")[0];
        let aLine = document.getElementsByClassName("a-line")[0];
        let pLine = document.getElementsByClassName("p-line")[0];
        let centerElement = document.getElementsByClassName("fluency-text")[0];
        let centerWidth = centerElement.offsetWidth;
        let kWidth = kElement.offsetWidth;
        let aWidth = aElement.offsetWidth;
        let pWidth = pElement.offsetWidth;
        let onResize = () => {
            let centerLineWidth =
                centerElement.offsetTop -
                aElement.offsetTop -
                aElement.offsetHeight -
                10;

            aLine.style.height = `${centerLineWidth}px`;
            // distance from K --> A
            let KASpace =
                aElement.offsetLeft + aWidth - (kElement.offsetLeft + kWidth);
            //Width of K element
            let kLineWith =
                Math.sqrt(KASpace ** 2 + centerLineWidth ** 2) -
                valueDifferenceForWidth;
            // calculate the degrees of K element
            let kDeg =
                90 -
                valueDifferenceForDeg -
                (Math.asin(centerLineWidth / kLineWith) * 180) / Math.PI;
            // set attributes
            kLine.style.transform = `rotate(-${kDeg}deg)`;
            kLine.style.height = `${kLineWith}px`;

            // distance from A to P element
            let APSpace =
                pElement.offsetLeft + pWidth - (aElement.offsetLeft + aWidth);
            // Width of P element
            let pLineWidth =
                Math.sqrt(APSpace ** 2 + centerLineWidth ** 2) -
                valueDifferenceForWidth;
            // calculate the degrees of P element
            let pDeg =
                90 -
                valueDifferenceForDeg -
                (Math.asin(centerLineWidth / pLineWidth) * 180) / Math.PI;
            // set attributes
            pLine.style.transform = `rotate(${pDeg}deg)`;
            pLine.style.height = `${pLineWidth}px`;
        };
        window.addEventListener("resize", () => {
            onResize();
        });
        onResize();
    }, []);

    return (
        <Grid container className="founder-section">
            <Grid item xs={12} lg={5} className="left-side">
                <img
                    src="../images/avatar.jpg"
                    alt="avatar"
                    className="avatar"
                />
                <div className="text-xl lg:text-2xl description-text">
                    Trần Nguyễn Phước
                </div>
                <div className="text-base lg:text-xl description-text-small">
                    (Founder of Be The Best English)
                </div>
            </Grid>
            <Grid item xs={12} lg={7} className="right-side">
                <div className="text-base text-center description-text lg:text-4xl">
                    Bắt đầu hành trình chinh phục tiếng Anh ngay hôm nay!
                </div>
                <div className="kap-section">
                    <div className="a-letter-section k-letter ">
                        <div className="text-6xl big-letter ">K</div>
                        <div className="text-lg text-detail">Knowledge </div>
                        <div className="text-base vietsub">( Kiến thức )</div>
                        <div className="k-line"></div>
                    </div>
                    <div className="a-letter-section a-letter">
                        <div className="text-6xl big-letter ">A</div>
                        <div className="text-lg text-detail">Assurance</div>
                        <div className="text-base vietsub">( Tự tin )</div>
                        <div className="a-line"></div>
                    </div>
                    <div className="a-letter-section p-letter">
                        <div className="text-6xl big-letter">P</div>
                        <div className="text-lg text-detail">Practice </div>
                        <div className="text-base vietsub">( Thực hành )</div>
                        <div className="p-line"></div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="fluency-text">
                    <div className="text-lg text-detail">Fluency </div>
                    <div className="text-base vietsub">( Sự lưu loát )</div>
                </div>
            </Grid>
        </Grid>
    );
}

export default FounderSection;

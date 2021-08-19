import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import { commentFromLearner } from "../../const/commentFromStudent";
function LearnerCommentPage() {
  const learnerAvatar = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [percentOfTranslate, setPercentOfTranslate] = useState(0);
  const numberOfLearner = commentFromLearner.length;
  {
    // let learnerAvatarElement = learnerAvatar.current.childNodes;
    // for (let i = 0; i < learnerAvatarElement.length; i++) {
    //   const avatar = learnerAvatarElement[i].lastChild;
    //   let check = avatar.classList.contains("active");
    //   if (i === currentIndex) {
    //     avatar.classList.add("active");
    //   } else if (check) {
    //     avatar.classList.remove("active");
    //   }
    // }
    // if (currentIndex === 0 || currentIndex === 1) {
    //   setPercentOfTranslate(0);
    // }
    // if (
    //   currentIndex <= numberOfLearner - 1 &&
    //   currentIndex >= numberOfLearner - 2
    // ) {
    //   setPercentOfTranslate((numberOfLearner - 1 - 1 - 2) * 25);
    // }
    // if (currentIndex > 1 && currentIndex < numberOfLearner - 2) {
    //   setPercentOfTranslate((currentIndex - 1) * 25);
    // }
    // learnerAvatar.current.style.transform = `translateX(-${percentOfTranslate}%)`;
  }
  let slideAnimation = (numberOfItem) => {
    let degree = 100 / numberOfItem;

    let learnerAvatarElement = learnerAvatar.current.childNodes;
    for (let i = 0; i < learnerAvatarElement.length; i++) {
      const avatar = learnerAvatarElement[i].lastChild;
      let check = avatar.classList.contains("active");
      if (i === currentIndex) {
        avatar.classList.add("active");
      } else if (check) {
        avatar.classList.remove("active");
      }
    }
    // index = 0 or 1 will not move the slide
    if (currentIndex === 0 || currentIndex === 1) {
      setPercentOfTranslate(0);
    }

    if (
      currentIndex <= numberOfLearner - 1 &&
      currentIndex >= numberOfLearner - 2
    ) {
      setPercentOfTranslate((numberOfLearner - numberOfItem) * degree);
    }

    if (currentIndex > 1 && currentIndex < numberOfLearner - 2) {
      setPercentOfTranslate((currentIndex - 1) * degree);
    }
    learnerAvatar.current.style.transform = `translateX(-${percentOfTranslate}%)`;
  };

  useEffect(() => {
    slideAnimation(3);
  }, [currentIndex, percentOfTranslate, numberOfLearner]);

  let renderLearnerAvata = () => {
    let result;
    result = commentFromLearner.map((learner, index) => {
      const { avatar } = learner;
      if (index !== currentIndex) {
        return (
          <div className="a-learner" key={index}>
            <img src={avatar} alt="avatar" />
          </div>
        );
      } else {
        return (
          <div className="a-learner" key={index}>
            <img src={avatar} alt="avatar" className="active" />
          </div>
        );
      }
    });
    return result;
  };
  let onControlButtonClick = (action) => {
    if (action === "back") {
      if (currentIndex === 0) {
        setCurrentIndex(numberOfLearner - 1);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
    if (action === "forward") {
      if (currentIndex === numberOfLearner - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };
  return (
    <div className="learner-comment-section">
      <div className="title">Học viên nói gì?</div>
      <div className="comment-wrapper">
        <div className="first-line">
          <KeyboardArrowLeftRoundedIcon
            className="arrow forward-arrow"
            onClick={() => onControlButtonClick("back")}
          />
          <div className="learner-avatar-wrapper">
            <div className="learner-avatar" ref={learnerAvatar}>
              {renderLearnerAvata()}
            </div>
          </div>
          <KeyboardArrowRightRoundedIcon
            className="arrow back-arrow"
            onClick={() => onControlButtonClick("forward")}
          />
        </div>
        <div className="second-line">
          <StarRoundedIcon className="star-icon" />
          <StarRoundedIcon className="star-icon" />
          <StarRoundedIcon className="star-icon" />
          <StarRoundedIcon className="star-icon" />
          <StarRoundedIcon className="star-icon" />
        </div>
        <div className="last-line">
          <div className="category-section">
            <div className="category-name">
              <div className="main-title">
                {commentFromLearner[currentIndex].comment}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnerCommentPage;

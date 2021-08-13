import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class WordSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let subjectOfInfo = this.props.subject;
    if (this.props.subjectStyle === "verticalLine") {
      subjectOfInfo = "▌" + this.props.subject;
    }

    return (
      <div
        className={
          "container" +
          " " +
          (this.props.background === "white"
            ? "background-white"
            : "background-lightgrey") +
          " " +
          (this.props.corner === "sharp" ? "corner-sharp" : "corner-round")
        }
      >
        <div
          className={
            "subject" +
            " " +
            (this.props.subjectStyle === "underline" ? "underline" : "") +
            " " +
            (this.props.subjectStyle === "backgroundColor"
              ? "background-color"
              : "") +
            " " +
            (this.props.subjectStyle === "bold" ? "bold" : "")
          }
        >
          {subjectOfInfo}
        </div>
        <div
          className={
            "content" +
            " " +
            (this.props.subjectStyle === "backgroundColor"
              ? "adjust-for-background-color"
              : "")
          }
        >
          {this.props.content}
        </div>
      </div>
    );
  }
}

WordSection.propTypes = {
  subject: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subjectStyle: PropTypes.string,
  background: PropTypes.string,
  corner: PropTypes.string,
};

export default WordSection;

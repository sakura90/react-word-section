"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WordSection extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let subjectOfInfo = this.props.subject;

    if (this.props.subjectStyle === "verticalLine") {
      subjectOfInfo = "▌" + this.props.subject;
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "container" + " " + (this.props.background === "white" ? "background-white" : "background-lightgrey") + " " + (this.props.corner === "sharp" ? "corner-sharp" : "corner-round")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "subject" + " " + (this.props.subjectStyle === "underline" ? "underline" : "") + " " + (this.props.subjectStyle === "backgroundColor" ? "background-color" : "") + " " + (this.props.subjectStyle === "bold" ? "bold" : "")
    }, subjectOfInfo), /*#__PURE__*/_react.default.createElement("div", {
      className: "content" + " " + (this.props.subjectStyle === "backgroundColor" ? "adjust-for-background-color" : "")
    }, this.props.content));
  }

}

WordSection.propTypes = {
  subject: _propTypes.default.string.isRequired,
  content: _propTypes.default.string.isRequired,
  subjectStyle: _propTypes.default.string,
  background: _propTypes.default.string,
  corner: _propTypes.default.string
};
var _default = WordSection;
exports.default = _default;
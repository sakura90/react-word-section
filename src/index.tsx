import * as React from "react";
import "./index.css";

export default function WordSection({
  subject,
  subjectStyle,
  background,
  corner,
  children,
} : {
  subject: string;
  subjectStyle: string;
  background: string;
  corner: string;
  children?: React.ReactNode;
}): JSX.Element {
  let subjectOfInfo = subject;
  if (subjectStyle === "verticalLine") {
    subjectOfInfo = "▌" + subject;
  }

  return (
    <div
      className={
        "rws-container" +
        " " +
        (background === "white"
          ? "rws-background-white"
          : "rws-background-lightgrey") +
        " " +
        (corner === "sharp" ? "rws-corner-sharp" : "rws-corner-round")
      }
    >
      <div
        className={
          "rws-subject" +
          " " +
          (subjectStyle === "underline" ? "rws-underline" : "") +
          " " +
          (subjectStyle === "backgroundColor" ? "rws-background-color" : "") +
          " " +
          (subjectStyle === "bold" ? "rws-bold" : "")
        }
      >
        {subjectOfInfo}
      </div>
      <div
        className={
          "rws-content" +
          " " +
          (subjectStyle === "backgroundColor"
            ? "rws-adjust-for-background-color"
            : "")
        }
      >
        {children}
      </div>
    </div>
  );
}

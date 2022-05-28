import React from "react";
import "./style/Footer.css";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="button close-button" onClick={props.left}>
        <span className="material-symbols-outlined">thumb_down</span>
      </div>
      <div className="button close-button" onClick={props.right}>
        <span className="material-symbols-outlined">thumb_up</span>
      </div>
    </div>
  );
}

import React from "react";
import "./style/Footer.css";

export default function CardFooter(props) {
  return (
    <div className="footer">
      <div className="button close-button button-dislike" onClick={props.left}>
        <span className="material-symbols-outlined">thumb_down</span>
      </div>
      <div className="button close-button button-like" onClick={props.right}>
        <span className="material-symbols-outlined">thumb_up</span>
      </div>
    </div>
  );
}

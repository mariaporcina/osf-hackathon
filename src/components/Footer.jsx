import React from "react";
import "./style/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="button close-button">
        <span class="material-symbols-outlined">thumb_up</span>
      </div>
      <div className="button close-button">
        <span class="material-symbols-outlined">thumb_down</span>
      </div>
    </div>
  );
}

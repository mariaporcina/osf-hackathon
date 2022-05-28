import React, { useState } from "react";
import { favi } from "./Card";
import CancelIcon from "@material-ui/icons/Cancel";
export default function Fav() {
  const [fs, setFs] = useState([]);
  console.log(fs);
  const kkk = (index) => {
    favi.splice(index, 1);
    setFs([...favi]);
  };
  return (
    <div className="favori">
      <div className="favoribg">
        <span> Your Favourite</span>
      </div>
      {favi.map((k, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${k.url})`,
              margin: "10px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              position: "relative"
            }}
            className="card"
          >
            <CancelIcon
              fontSize="large"
              style={{
                position: "absolute",
                top: "2px",
                right: "2px",
                backgroundColor: "white",
                borderRadius: "50%"
              }}
              onClick={()=>kkk(index)}
            />
            <span>{k.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
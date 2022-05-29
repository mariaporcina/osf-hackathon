import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// import { fav } from "./ProductCard";



export default function Fav() {

  const location = useLocation()
  const { fav } = location.state
  
  console.log(fav)
  console.log(typeof fav)

  const [fs, setFs] = useState([]);
  console.log(fs);
  const kkk = (index) => {
    fav.splice(index, 1);
    setFs(Object.values([...fav]));
  };
  return (
    <div className="favori">
      <div className="favoribg">
        <span> Your Favourite</span>
      </div>
      {fav.map((k, index) => (
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
            <button
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
import React from "react";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import axios from "axios";

// import { SwipeableDrawer } from "@material-ui/core";
// import { FavoriteOutlined } from "@material-ui/icons";
export const favi = [];
export const Card = () => {
  const [people, setPeople] = useState([]);
  const [fav, setFav] = useState([]);
  const [people1, setPeople1] = useState([]);
  const [people2, setPeople2] = useState([]);

  const peop = [...people, ...people1, ...people2];
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=360a9b5e0dea438bac3f653b0e73af47&language=en-US"
      )
      .then((res) => setPeople(res.data.results.reverse()));
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=28`
      )
      .then((res) => setPeople1(res.data.results.reverse()));
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=360a9b5e0dea438bac3f653b0e73af47&with_genres=10749"
      )
      .then((res) => setPeople2(res.data.results.reverse()));
  }, []);

  const Swiped = (direction, index, name, url) => {
    if (direction === "right") {
      favi.push({ name, url });
      
      axios.post()
    }
  };
  console.log(peop);



  return (
    <div className="body">
      <div className="body_container">
        {peop.map((k, index) => (
          <TinderCard
            className="swipe"
            key={k.id[0]}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) =>
              Swiped(dir, index, k.original_title, k.poster_path)
            }
            //onCardLeftScreen={() => outOfFrame(k.name)}
          >
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${k.poster_path})`
              }}
              className="card"
            >
              <h4
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "0",
                  backgroundSize: "10px",
                  borderRadius: "99px",
                  backgroundColor: "black"
                }}
              >
                {k?.original_title}
              </h4>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Card
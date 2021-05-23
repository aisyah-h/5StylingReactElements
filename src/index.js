import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    {/*in line below, ?grayscale is lorem picsum's setting to make the image whose url we copied turn grayscale
     */}
    <img src={+"?grayscale"}></img>
    <div>
      <img
        className="food-img"
        src="https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794.jpg"
      />
      <img
        className="food-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3SJDHaYESUKAz6fTrjdcKyVi9jXqmtQxfvA&usqp=CAU"
      />
    </div>
  </div>,
  document.getElementById("root")
);

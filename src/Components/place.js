import React from "react";

export default function Place(props) {
  return (
    <div>
      {" "}
      <div className="place-container">
        <div className="img">
          <img src={props.item.image}></img>
        </div>
        <div className="place-details">
          <div id="location">
            <img src="./images/location-pin.png" width="10px"></img>
            <p id="country">{props.item.country}</p>
            <a href="{props.item.Googlemap}" target="_blank">
              View on Google Maps
            </a>
          </div>
          <h2 id="Name">{props.item.name}</h2>
          <h5 id="date">{props.item.date}</h5>
          <p id="description">{props.item.description}</p>
        </div>
      </div>
      <div id="rectangle"></div>
    </div>
  );
}

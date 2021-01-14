import React from "react";
import './SeasonDisplay.css';

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "Summer" : "Winter";
  } else {
    return latitude > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = ({ latitude }) => {
  const date = new Date().getMonth();
  const season = getSeason(latitude, date);
  const icons = season === "Winter" ? "snowflake outline" : "sun outline";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${icons} icon`} />
      <h2>
        {season === "Winter"
          ? "Brrrrrr...It's cold outside!"
          : "Let's go to beach..."}
      </h2>
      <i className={`icon-right huge ${icons} icon`} />
    </div>
  );
};

export default SeasonDisplay;

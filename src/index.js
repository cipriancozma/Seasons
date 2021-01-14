import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from './LoadingSpinner';

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMsg, setErrMsg] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
        },
        (error) => {
          setErrMsg(error.message);
        }
      );
  }, [])


  return (
      <div>
         {
           errorMsg && !latitude ? <div>Error: {errorMsg}</div> : ""
         } 
         {
            !errorMsg && latitude ? <SeasonDisplay latitude={latitude} /> : ""
         }
         {
             !errorMsg && !latitude ? <LoadingSpinner /> : ""
         }
      </div>
  )
         
};

ReactDOM.render(<App />, document.querySelector("#root"));

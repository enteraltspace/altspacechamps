import React, { useEffect, useState } from "react";
import "./timer.css";
function Timer({ setLaunchText }) {
  const [hour, sethour] = useState(0);
  const [second, setsecond] = useState(0);
  const [minute, setminute] = useState(0);
  const [day, setday] = useState(0);
  const [live, setLive] = useState(false);
  useEffect(() => {
    let countDownDate = new Date("Nov 30, 2022 16:00:00").getTime();
    setInterval(() => {
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result in an element with id=".countdown"
      setday(days.toString());
      sethour(hours.toString());
      setminute(minutes.toString());
      setsecond(seconds.toString());
      //
      // If the count down is over, write some text
      if (distance < 0) {
        // countDownDate += 3600000 * Math.abs(Math.round(distance / 3600000) - 1);
        setLaunchText("Mint is Live");
        setLive(true);
      }
    }, 1000);
  });

  return (
    <>
      {!live && (
        <div id="countdown">
          <div className="countdown-day">
            <h3 className="countdown-text">{day}</h3>
            <h6 className="countdown-text">Days</h6>
          </div>
          <div className="countdown-day">
            <h3 className="countdown-text">{hour}</h3>
            <h6 className="countdown-text">Hours</h6>
          </div>
          <div className="countdown-day">
            <h3 className="countdown-text">{minute}</h3>
            <h6 className="countdown-text">Minutes</h6>
          </div>
          <div className="countdown-day">
            <h3 className="countdown-text">{second}</h3>
            <h6 className="countdown-text">Seconds</h6>
          </div>
        </div>
      )}
    </>
  );
}

export default Timer;

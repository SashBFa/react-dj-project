import React, { useEffect, useState } from "react";

const NextGig = () => {
  const dateGig = new Date("June 06, 2022 10:00:00");
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [mins, setMins] = useState();
  const [secs, setSecs] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const dateNow = new Date();
      let mms = dateGig.getTime() - dateNow.getTime();
      let days = Math.floor(mms / (24 * 60 * 60 * 1000));
      mms -= days * (24 * 60 * 60 * 1000);
      let hours = Math.floor(mms / (60 * 60 * 1000));
      mms -= hours * (60 * 60 * 1000);
      let mins = Math.floor(mms / (60 * 1000));
      mms -= mins * (60 * 1000);
      let secs = Math.floor(mms / 1000);
      setDays(days);
      setHours(hours);
      setMins(mins);
      setSecs(secs);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nextGig">
      <h2 className="nextGig__title">Next Gig</h2>
      <p className="nextGig__info">
        Tickets for my next event are already available.
      </p>
      <div className="nextGig__box">
        <div className="nextGig__count">
          {days}
          <p>days</p>
        </div>
        <div className="nextGig__count">
          {hours}
          <p>hours</p>
        </div>
        <div className="nextGig__count">
          {mins}
          <p>minutes</p>
        </div>
        <div className="nextGig__count">
          {secs}
          <p>seconds</p>
        </div>
      </div>
      <button className="button button--large">buy tickets</button>
    </div>
  );
};

export default NextGig;

import React, { useEffect, useState } from "react";
import { tourData } from "../data/tour";
import { v4 as uuidv4 } from "uuid";

const TourSchedule = () => {
  const [mois, setMois] = useState([]);
  const uniqMonth = [...new Set(mois)];
  const [filter, setFilter] = useState(uniqMonth[0]);
  const theDate = (i) => {
    let newDate = new Date(i);
    let date = newDate.getDate();
    let year = newDate.toLocaleString("default", { year: "numeric" });
    let month = newDate.toLocaleString("default", { month: "short" });
    return `${month} ${date}, ${year}`;
  };
  const theMonth = (i) => {
    let newDate = new Date(i);
    let month = newDate.toLocaleString("default", { month: "long" });
    return month;
  };

  useEffect(() => {
    tourData.map((mon) => {
      const newDate = new Date(mon.date);
      const month = newDate.toLocaleString("default", { month: "long" });
      setMois((mois) => [...mois, month]);
      return null;
    });
  }, []);
  const handleFilterTodos = () => {
    if (filter === uniqMonth[1]) {
      console.log(uniqMonth[1]);
    } else if (filter === uniqMonth[2]) {
      console.log(uniqMonth[2]);
    } else {
      console.log(uniqMonth[0]);
    }
  };
  handleFilterTodos();
  return (
    <div>
      <h2>Tour Schedule</h2>
      <div className="tour__boxInput">
        <label>
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="radio"
            name="filtre"
            value={uniqMonth[0]}
            defaultChecked
          />
          {uniqMonth[0]}
        </label>
        <label>
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="radio"
            name="filtre"
            value={uniqMonth[1]}
          />
          {uniqMonth[1]}
        </label>
        <label>
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="radio"
            name="filtre"
            value={uniqMonth[2]}
          />
          {uniqMonth[2]}
        </label>
      </div>
      {tourData &&
        tourData.map((tour) => (
          <div key={tour.id}>
            <input type="radio" />
            <h5>{theDate(tour.date)}</h5>
            <h4>{tour.space}</h4>
            <p>{tour.description}</p>
            <button>buy tickets </button>
          </div>
        ))}
    </div>
  );
};

export default TourSchedule;

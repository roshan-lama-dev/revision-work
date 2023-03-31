import {
  faCalendar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";

import "./list.scss";

export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);

  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);
  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lstitle">Search</h1>
            <div className="listItem">
              <label htmlFor="">Destination/property name:</label>

              <input
                type="text"
                placeholder="Where are you going?"
                className="inputField"
                value={destination}
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            </div>
            <div className="listItem">
              <label htmlFor="">Check-in Date</label>

              <span
                className="inputFields"
                // disabled
              >
                {" "}
                {`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyy"
                )}`}
              </span>

              <DateRange />
              <FontAwesomeIcon icon={faCalendar} className="iconC" />
            </div>
            <div className="listItem">
              <label htmlFor="">Check-out Date</label>

              <input
                type="text"
                placeholder="Where are you going?"
                className="inputField"
              />
              <FontAwesomeIcon icon={faCalendar} className="icon" />
            </div>
          </div>
          <div className="listResult">he</div>
        </div>
      </div>
    </div>
  );
};

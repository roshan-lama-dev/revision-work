import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./header.scss";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
export const Header = ({ type }) => {
  // useState for the select date component
  const naigate = useNavigate();
  // this is for destination
  const [destination, setDestination] = useState("");
  // this is for date
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showDate, setShowDate] = useState(false);

  // useState for the select number of room and person component
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    children: 0,
    adult: 1,
    room: 0,
  });

  const handleOption = (optionName, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [optionName]:
          operation === "i" ? option[optionName] + 1 : option[optionName] - 1,
      };
    });
  };
  // const roomCounter = (operation) => {
  //   let reqCounter = counter;
  //   if (operation === "inc") {
  //     setCounter(reqCounter++);
  //   } else setCounter(reqCounter--);
  // };

  const handleSearch = () => {
    if (!destination) {
      alert("Please enter the destination");
    } else {
      naigate("/hotel", { state: { destination, date, option } });
    }
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Attraction</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetome of Discount? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant saving
            </p>

            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setShowDate(!showDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "yyyy/MM/dd")} to ${format(
                    date[0].endDate,
                    "yyyy/MM/dd"
                  )}`}{" "}
                </span>
                {showDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOption(!openOption)}
                  className="headerSearchText"
                >{`${option.adult} adult. ${option.children} children. ${option.room} room`}</span>

                {openOption && (
                  <div className="optionItem">
                    <div className="optionContainer">
                      <div className="adultItem">
                        <div className="text">
                          <p>Adults</p>
                        </div>
                        <div className="coutner">
                          <button
                            disabled={option.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                            className="counterBtn"
                          >
                            -
                          </button>

                          <div className="counterText">{`${option.adult}`}</div>
                          <button
                            onClick={() => handleOption("adult", "i")}
                            className="counterBtn"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="adultItem">
                        <div className="text">
                          <p>Children</p>
                        </div>
                        <div className="coutner">
                          <button
                            disabled={option.children <= 0}
                            className="counterBtn"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>

                          <div className="counterText">{`${option.children}`}</div>
                          <button
                            className="counterBtn"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="adultItem">
                        <div className="text">
                          <p>Rooms</p>
                        </div>
                        <div className="coutner">
                          <button
                            disabled={option.room <= 0}
                            className="counterBtn"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>

                          <div className="counterText">{option.room}</div>
                          <button
                            className="counterBtn"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setOpenOption(!openOption)}
                      className="doneBtn"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button onClick={handleSearch} className="headerBtn">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

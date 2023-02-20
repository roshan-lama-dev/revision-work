import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const userObj = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="mt-5 d-flex flex-column justify-content-between align-items-center">
      <div className="mainSidebar bg-blue"></div>

      <div className="middle">
        <ul>
          {userObj.role === "teacher" ? (
            <>
              <Link to="/books" className="nav-link">
                <li>Display Books</li>
              </Link>
              <Link to="/addbooks" className="nav-link">
                <li> Add Books</li>
              </Link>
              <li>Transaction </li>
              <li>My Books</li>
            </>
          ) : (
            <>
              <li>Display Books</li>
              <li>My Books</li>
            </>
          )}
        </ul>
      </div>

      <div className="bottom">
        <ul>
          <li>User Profile</li>
        </ul>
      </div>
    </div>
  );
};

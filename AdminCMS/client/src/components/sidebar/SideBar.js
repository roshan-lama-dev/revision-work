import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../../system/systemSlice";
export const SideBar = () => {
  const dispatch = useDispatch();
  const { showSideBar } = useSelector((state) => state.sideBarToogle);

  return (
    <>
      <Offcanvas show={showSideBar} onHide={() => dispatch(setShow(false))}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

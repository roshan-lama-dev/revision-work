import React from "react";
import { Button, Card } from "react-bootstrap";
import { getUser } from "../helpers/UserfromSession";

export const CustomCards = ({ title, author, thumbnail, published }) => {
  const role = getUser();
  console.log(role);

  const handleOnBorrow = () => {};
  const handleOnDelete = () => {};
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Author : {author}</Card.Text>
        <Card.Text>Published Date: {published}</Card.Text>

        {role === "teacher" ? (
          <div className="d-flex  justify-content-between">
            <Button variant="primary" onClick={handleOnBorrow}>
              Borrow
            </Button>
            <Button variant="danger" onClick={handleOnDelete}>
              Delete
            </Button>
          </div>
        ) : (
          <>
            <div className="d-grid">
              <Button variant="primary">Borrow</Button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

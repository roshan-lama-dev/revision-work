import React from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { deleteBookFront } from "../helpers/axiosHelper";
import { getUser } from "../helpers/UserfromSession";

export const CustomCards = ({ _id, title, author, thumbnail, published }) => {
  const role = getUser();
  console.log(role);

  const handleOnBorrow = () => {};
  const handleOnDelete = async (_id) => {
    const { status, message } = await deleteBookFront(_id);

    toast[status](message);
  };
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
            <Button variant="danger" onClick={() => handleOnDelete(_id)}>
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

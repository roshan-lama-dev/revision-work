import React, { useEffect, useState } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import { CustomCards } from "../customCards/CustomCards";
import { DashboardLayout } from "../customLayout/DashboardLayout";
import { getBooks } from "../helpers/axiosHelper";

export const Books = () => {
  const [bookList, setBooksList] = useState([]);
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const result = await getBooks();
    setBooksList(result);
  };

  console.log(bookList);
  return (
    <DashboardLayout>
      <Container>
        <div className="d-flex gap-3 flex-wrap p-5">
          {bookList.map((item, index) => {
            // since the arrays are inside the we need to loop inside the element

            return <CustomCards {...item} />;
          })}
        </div>
      </Container>
    </DashboardLayout>
  );
};

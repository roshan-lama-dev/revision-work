import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
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
      {bookList.map((item, index) => {
        // since the arrays are inside the we need to loop inside the element

        return <p>item.title</p>;
      })}
    </DashboardLayout>
  );
};

import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomInput from "../customInput/CustomInput";
import { DashboardLayout } from "../customLayout/DashboardLayout";
import { registerBooks } from "../helpers/axiosHelper";

const initalBookDetails = {
  title: "",
  author: "",
  thumbnail: "",
  isbn: "",
  published: "",
};
export const AddBooks = () => {
  const [handleOnForm, sethandleOnForm] = useState(initalBookDetails);

  const formDetails = [
    {
      label: "Book Title",
      placeholder: "Enter book Title",
      type: "text",
      name: "title",
      required: "true",
      value: handleOnForm.title,
    },
    {
      label: "Book Author",
      placeholder: "Enter book Author",
      type: "text",
      name: "author",
      required: "true",
      value: handleOnForm.author,
    },
    {
      label: "Book Thumbnail",
      placeholder: "Paste the image",
      type: "text",
      name: "thumbnail",
      value: handleOnForm.thumbnail,
      required: "true",
    },
    {
      label: "Book iSBN",
      placeholder: "Enter book iSBN",
      type: "text",
      name: "isbn",
      value: handleOnForm.isbn,
      required: "true",
    },
    {
      label: "Book Published Date",
      placeholder: "Enter book Date",
      type: "text",
      name: "published",
      value: handleOnForm.published,
      required: "true",
    },
  ];

  const handleonSubmit = async (e) => {
    e.preventDefault();

    const { status, message } = await registerBooks(handleOnForm);
    if (status === "success") {
      sethandleOnForm(initalBookDetails);
    }

    toast[status](message);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    sethandleOnForm({
      ...handleOnForm,
      [name]: value,
    });
  };
  console.log(handleOnForm);
  return (
    <DashboardLayout>
      <Container>
        <Form onSubmit={handleonSubmit}>
          {formDetails.map((item, index) => {
            return (
              <CustomInput
                {...item}
                key={item.name}
                onChange={handleOnChange}
              />
            );
          })}
          <Button type="submit" className="mt-4">
            Add Books
          </Button>
        </Form>
      </Container>
    </DashboardLayout>
  );
};

import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { v4 as uuidv4 } from 'uuid';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : '',
    author: props.book ? props.book.author : '',
    date: props.book ? props.book.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, date } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, date];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        date
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Te rog sa completezi toate campurile.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      // case 'quantity':
      //   if (value === '' || parseInt(value) === +value) {
      //     setBook((prevState) => ({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      //   break;
      // case 'price':
      //   if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      //     setBook((prevState) => ({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      //   break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={12} xs={12} md={{ span:6, offset: 3 }}>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name" className="mt-3">
              <Form.Label>Titlu</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="bookname"
                value={bookname}
                placeholder="Introdu numele cartii"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="author" className="mt-3">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="author"
                value={author}
                placeholder="Introdu numele autorului"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="date" className="mt-3">
              <Form.Label>Data publicarii</Form.Label>
              <br/>
              <DatePicker
                type="date"
                name="date"
                className="form-control input-control"
                dateFormat="yyyy-mm-dd"
                placeholder="Selecteaza data publicarii"
                value={date.toString()}
                onChange={date => handleInputChange({ target: { value: date, name: 'date' } })}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn mt-3">
              Adauga
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BookForm;
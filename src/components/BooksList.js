import React, { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BooksList = () => {

  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  function splitArrayIntoChunks(array, chunkSize = 3) {
    return Array.from({ length: Math.ceil(array.length / chunkSize) })
      .map((_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize));
  }

  return (
    <React.Fragment>
       <Container>
        {!_.isEmpty(books) ? (
          splitArrayIntoChunks(books).map((chunk) => (
            <Row>
              { chunk.map((book) => (
                <Col className="mt-3">
                  <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
                </Col>
              )) }
            </Row>
          ))
        ) : (
          <p className="message">Nici o carte disponibila. Poti adauga niste carti.</p>
        )}
      </Container>
    </React.Fragment>
  );
};

export default BooksList;
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Book = ({
  id,
  bookname,
  author,
  date,
  handleRemoveBook
}) => {
    const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Nume Autor: {author}</div>
          <div>Data publicarii: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
        Editeaza
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Sterge
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
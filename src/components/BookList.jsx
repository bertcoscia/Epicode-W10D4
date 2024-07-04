import { Button, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useState } from "react";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import CommentArea from "./CommentArea";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

const BookList = props => {
  const [title, setTitle] = useState("");

  const [comments, setComments] = useState([]);

  const [genre, setGenre] = useState();

  const fetchComments = asin => {
    fetch(`${URL + asin}`, {
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Couldn't get data");
        }
      })
      .then(comments => {
        setComments(comments);
      })
      .catch(error => console.log(error));
  };

  const handleFieldChange = value => setTitle(value);

  const handleSubmit = event => event.preventDefault();

  return (
    <Container>
      <Container className="d-flex justify-content-evenly my-3">
        <Button variant="info" onClick={() => setGenre(fantasy)}>
          Fantasy
        </Button>
        <Button variant="info" onClick={() => setGenre(history)}>
          History
        </Button>
        <Button variant="info" onClick={() => setGenre(horror)}>
          Horror
        </Button>
        <Button variant="info" onClick={() => setGenre(romance)}>
          Romance
        </Button>
        <Button variant="info" onClick={() => setGenre(scifi)}>
          SciFi
        </Button>
      </Container>
      <Container className="mb-3">
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" placeholder="Search a book" onChange={event => handleFieldChange(event.target.value)} />
          </Form.Group>
        </Form>
      </Container>
      <Row>
        <Row className="gy-3 mb-3 gx-3 col-8">
          {genre && genre.length > 0 ? (
            title ? (
              genre
                .filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
                .map(book => <SingleBook key={book.asin} book={book} asin={book.asin} fetchComments={fetchComments} selectedAsin={props.selectedAsin} setSelectedAsin={props.setSelectedAsin} />)
            ) : (
              genre.map(book => <SingleBook key={book.asin} book={book} asin={book.asin} handleClick={props.handleClick} fetchComments={fetchComments} selectedAsin={props.selectedAsin} setSelectedAsin={props.setSelectedAsin} />)
            )
          ) : (
            <h2>Select a genre</h2>
          )}
        </Row>
        <div className="col-4 mt-3">
          <CommentArea comments={comments} asin={props.asin} fetchComments={fetchComments} isSelected={props.isSelected} /* isLoading={this.state.isLoading} */ />
        </div>
      </Row>
    </Container>
  );
};

export default BookList;

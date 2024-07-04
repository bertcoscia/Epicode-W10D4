import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

const AddComment = props => {
  /* state = {
    comment: "",
    rate: "5",
    elementId: this.props.asin
  }; */

  const [review, setReview] = useState({
    comment: "",
    rate: 5,
    elementId: props.asin
  });

  const fetchPostComment = () => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        Authorization: auth,
        "Content-type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          alert("Comment successfully posted");
          props.fetchComments(props.asin);
          setReview({
            comment: "",
            rate: 5,
            elementId: props.asin
          });
        } else {
          throw new Error("Comment not posted");
        }
      })
      .catch(error => console.log(error));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchPostComment();
  };

  const handleFieldChange = (key, value) => {
    setReview({ ...review, [key]: value });
  };

  return (
    <Form className="mt-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Rate</Form.Label>
        <Form.Control value={review.comment} className="my-3" type="text" placeholder="Your comment" onChange={event => handleFieldChange("comment", event.target.value)} required />
        <Form.Control value={review.rate} className="my-3" type="number" placeholder="Your rating" min={1} max={5} onChange={event => handleFieldChange("rate", event.target.value)} required />
        <Button type="sumbit" variant="info">
          Send
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddComment;

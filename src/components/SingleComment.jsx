import { Badge, Button, ListGroup } from "react-bootstrap";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk5NzdjMjM5YzAwMTUyZjRiM2MiLCJpYXQiOjE3MTk0OTA4MjksImV4cCI6MTcyMDcwMDQyOX0.DKsZ6NE4RC2q5DGQhtPu6bhYlYLaj2pWT9Zbpm7r2Ws";

const SingleComment = props => {
  /*  const fetchComment = id => {
    fetch(`${URL + id}`, {
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
      .then(comment => {
        setReview([comment]);
      });
  }; */

  const deleteComment = id => {
    fetch(`${URL + id}`, {
      method: "DELETE",
      headers: {
        Authorization: auth
      }
    })
      .then(response => {
        if (response.ok) {
          alert("Comment successfully deleted");
          props.fetchComments(props.asin);
        } else {
          throw new Error("Couldn't delete comment");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <ListGroup.Item className="d-flex flex-column">
      <p>
        <strong>{props.author}</strong>
      </p>
      <p>{props.review}</p>
      <Badge className="align-self-center mb-3" bg="info">
        {props.rate}
      </Badge>
      <Button className="align-self-center" variant="danger" onClick={() => deleteComment(props.commentId)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;

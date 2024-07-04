import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = props => {
  return (
    <ListGroup className="my-3">
      {props.comments.map(comment => (
        <SingleComment key={comment._id} className="d-flex flex-column align-itmes-center" commentId={comment._id} fetchComments={props.fetchComments} asin={props.asin} author={comment.author} review={comment.comment} rate={comment.rate} />
      ))}
    </ListGroup>
  );
};

export default CommentsList;

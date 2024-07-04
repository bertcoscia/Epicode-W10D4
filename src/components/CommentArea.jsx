import { useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Alert } from "react-bootstrap";

const CommentArea = props => {
  useEffect(() => {
    props.fetchComments(props.asin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  return (
    <div className="position-sticky" style={{ top: "30px" }}>
      {props.isSelected ? (
        <>
          {props.comments.length > 0 ? (
            <CommentsList comments={props.comments} fetchComments={props.fetchComments} asin={props.asin} />
          ) : (
            <Alert variant="warning" className="text-center">
              <strong>There are no comments</strong>
            </Alert>
          )}
          <AddComment asin={props.asin} comments={props.comments} fetchComments={props.fetchComments} />
        </>
      ) : (
        <Alert variant="warning" className="text-center">
          <strong>Select a book</strong>
        </Alert>
      )}
    </div>
  );
};

export default CommentArea;

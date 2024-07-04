import { Card, Col } from "react-bootstrap";

const SingleBook = props => {
  /* state = {
    isSelected: false
  }; */

  /*  handleClick = () => {
    if (!this.state.isSelected) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  }; */

  return (
    <Col xs={12} md={4} xl={3} onClick={() => props.fetchComments(props.asin)}>
      <Card onClick={() => props.handleClick(props.asin)} className={props.selectedAsin === props.asin ? "border-danger" : ""}>
        <Card.Img variant="top" src={props.book.img} onClick={() => props.handleClick(props.asin)} />
        <Card.Body>
          <Card.Title className="mb-3">{props.book.title}</Card.Title>
          <span className="rounded-pill px-3 py-2 bg-info">${props.book.price}</span>
        </Card.Body>
      </Card>
      {/* {this.state.isSelected && <CommentArea asin={this.props.book.asin} />} */}
    </Col>
  );
};

export default SingleBook;

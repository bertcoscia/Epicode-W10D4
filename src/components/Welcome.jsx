import { Alert, Container } from "react-bootstrap";

const Welcome = () => (
  <Container>
    <Alert variant="info" className="text-center my-3">
      <h3>Welcome to EpiBooks</h3>
    </Alert>
  </Container>
);

export default Welcome;

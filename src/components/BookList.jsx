import { Container, Row, Col } from "react-bootstrap";
import SigleBook from "./SingleBook";
const BookList = (props) => (
  <Container>
    <Row>
      {props.books.map((book) => (
        <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
          <SigleBook book={book} />
        </Col>
      ))}
    </Row>
  </Container>
);
export default BookList;

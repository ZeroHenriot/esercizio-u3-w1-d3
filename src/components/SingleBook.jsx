import { Card, Col } from 'react-bootstrap'

function SingleBook(props) {
  return (
    <>
      <Col md={3} className="py-2">
        <Card className="h-100">
          <Card.Img variant="top" className="h-75" src={props.img}></Card.Img>
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-nowrap text-truncate">
              {props.title}
            </Card.Title>
            <Card.Text>{props.price} €</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default SingleBook

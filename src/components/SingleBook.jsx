import { Component } from 'react'
import { Card, Col } from 'react-bootstrap'

class SingleBook extends Component {
  state = { seleceted: false }
  render() {
    return (
      <>
        <Col md={3} className="py-2">
          <Card
            className="h-100"
            onClick={() => this.setState({ seleceted: !this.state.seleceted })}
            border={this.state.seleceted ? 'success' : ''}
          >
            <Card.Img
              variant="top"
              className="h-75"
              src={this.props.book.img}
            ></Card.Img>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title className="text-nowrap text-truncate">
                {this.props.book.title}
              </Card.Title>
              <Card.Text>{this.props.book.price} €</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default SingleBook

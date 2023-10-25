import { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import SingleBook from './SingleBook'

class BookList extends Component {
  state = {
    category: 'horror',
  }
  render() {
    return (
      <>
        <Container>
          <Row>
            <SingleBook></SingleBook>
          </Row>
        </Container>
      </>
    )
  }
}

export default BookList

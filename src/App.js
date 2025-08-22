import './App.css';
import ContactForm from './component/ContactForm';
import { Container, Row, Col } from 'react-bootstrap';
import ContactList from './component/ContactList';
import SearchBox from './component/SearchBox';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="text-center my-4">Phone Book</h1>
        <Row>
          <Col lg={6} className="mb-4">
            <ContactForm />
          </Col>
          <Col lg={6}>
            <SearchBox />
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './component/ContactForm';
import { Container, Row, Col } from 'react-bootstrap'
import ContactList from './component/ContactList';

// 왼쪽 연락처, 오른쪽 리스트&서치
// 이름과 전화번호 추가할수 있다
// 리스트에 아이템 몇개있는지 보인다
// 사용자가 유저를 이름검색으로 찾을 수 있다.
function App() {
  return (
    <div>
      <h1 className='title'>PHONE BOOK</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

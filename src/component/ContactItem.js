import React from 'react';
import { Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactItem = ({ item }) => {
    const dispatch = useDispatch();

    const deleteContact = () => {
        dispatch({ type: 'DELETE_CONTACT', payload: { phoneNumber: item.phoneNumber } });
    };

    return (
        <ListGroup.Item>
            <Row className="align-items-center">
                <Col xs={3} md={2}>
                    <img 
                        width={50} 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg' 
                        alt='profile' 
                        className="rounded-circle"
                    />
                </Col>
                <Col xs={6} md={8}>
                    <div>
                        <strong>{item.name}</strong>
                    </div>
                    <div>{item.phoneNumber}</div>
                </Col>
                <Col xs={3} md={2}>
                    <Button variant="danger" className="w-100" onClick={deleteContact}>삭제</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default ContactItem;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    const addContact = (event) => {
        event.preventDefault();
        dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
        setName('');
        setPhoneNumber('');
    };

    return (
        <div className='contact-form'>
            <h2 className="mb-3">연락처 추가</h2>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="이름을 입력해주세요" 
                        onChange={(event) => setName(event.target.value)} 
                        value={name}
                        required 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control 
                        type="tel" 
                        placeholder="전화번호를 입력해주세요" 
                        onChange={(event) => setPhoneNumber(event.target.value)} 
                        value={phoneNumber}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    추가
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;

import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch(); // 값을 보내기 위해 action을 던짐
    const addContact = (event) => {
        event.preventDefault();
        // action을 파라미터값으로 넘기는데 type과 payload 키를 가지고 있어야 한다.
        dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } })
    }
    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event) => setPhoneNumber(event.target.value)} />
                </Form.Group>
                {/* onClick -> onSubmit */}
                <Button variant="primary" type="submit">
                    추가
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm

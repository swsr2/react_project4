import React, { useState } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
const SearchBox = () => {
    const [searchPerson, setSearchPerson] = useState('')
    const dispatch = useDispatch()
    const searchName = (event) => {
        event.preventDefault();
        dispatch({ type: "SEARCH", payload: { searchPerson } })
    }
    return (
        <Form onSubmit={searchName}>
            <Row>
                <Col lg={10}>
                    <Form.Control type="text" placeholder="이름 검색" onChange={(event) => setSearchPerson(event.target.value)} />
                </Col>
                <Col lg={2}>
                    <Button type='submit'>Search</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox


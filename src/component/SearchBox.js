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
        <div className="mb-4">
            <Form onSubmit={searchName}>
                <Row>
                    <Col xs={9}>
                        <Form.Control 
                            type="text" 
                            placeholder="검색할 이름을 입력해주세요" 
                            onChange={(event) => setSearchPerson(event.target.value)}
                            value={searchPerson}
                        />
                    </Col>
                    <Col xs={3}>
                        <Button variant="primary" type="submit" className="w-100">
                            검색
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SearchBox


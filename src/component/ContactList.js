import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const ContactList = () => {
    const { contactList, searchPerson } = useSelector(state => state);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (searchPerson !== "") {
            const list = contactList.filter((item) => item.name.includes(searchPerson));
            setFilteredList(list);
        } else {
            setFilteredList(contactList);
        }
    }, [searchPerson, contactList]);

    return (
        <div>
            <div className="mb-2">총 인원: {filteredList.length}명</div>
            <ListGroup>
                {filteredList.map((item, index) => (
                    <ContactItem item={item} key={index} />
                ))}
            </ListGroup>
        </div>
    );
};

export default ContactList;

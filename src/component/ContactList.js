import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const { contactList, searchPerson } = useSelector(state => state)
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (searchPerson !== "") {
            const list = contactList.filter((item) => item.name.includes(searchPerson));
            setFilteredList(list);
        } else {
            setFilteredList(contactList);
        }
    }, [searchPerson, contactList])

    return (
        <div>
            <SearchBox />
            <div className='list'>
                총 인원:{filteredList.length}
                {filteredList.map((item, index) => <ContactItem item={item} key={index} />)}
            </div>
        </div>
    )
}

export default ContactList

import { useDispatch, useSelector } from "react-redux";
import {deleteContact} from 'redux/contacts/contactsSlice';
import s from './ContactTable.module.css';

const ContactTable = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();
  
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  
    return (
      <>
        {contacts.length === 0 ? (
          <p className={s.message}>There is no contact</p>
        ) : (
          <table className={s.contactListTable}>
            <thead className={s.thead}>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={s.tbody}>
              {filteredContacts?.map(({ id, name, number }) => {
                return (
                  <tr key={id}>
                    <td>{name} </td>
                    <td>{number}</td>
                    <td>
                      <button onClick={() => dispatch(deleteContact(id))}>
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  };
  
  export default ContactTable;
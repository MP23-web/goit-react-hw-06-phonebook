import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactTable from './ContactTable/ContactTable';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactTable />
    </div>
  );
};
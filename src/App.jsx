import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchValue, setSearchValue] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  const addContact = (newContact) => {
    setContacts((prevContactList) => {
      return [...prevContactList, newContact];
    });
  };
  const deleteContacts = (contactId) => {
    setContacts((prevContactList) =>
      prevContactList.filter((contact) => contact.id !== contactId)
    );
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <p>{searchValue}</p>
      <ContactForm addContact={addContact} />
      <SearchBox
        searchValue={searchValue}
        handleSearchChange={setSearchValue}
      />
      <ContactList
        contacts={filteredContacts}
        deleteContacts={deleteContacts}
      />
    </div>
  );
}

export default App;
// _________________________________________________variant 1
// const [filteredContacts, setFilteredContacts] = useState([]);
// const handleSearchChange = (event) => {
//   setSearchValue(event.target.value);
// };
// useEffect(
//   () =>
//     setFilteredContacts(
//       contacts.filter((contact) => {
//         return contact.name.toLowerCase().includes(searchValue.toLowerCase());
//       })
//     ),
//   [searchValue, contacts]
// );

//  <SearchBox handleSearchChange={handleSearchChange} />
//  <ContactList
//         contacts={filteredContacts.length > 0 ? filteredContacts : contacts}
//       />

import React, { useState } from "react";
import "./ContactListManager.css";

const ContactListManager = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    if (name && email && phone) {
      const newContact = { name, email, phone };
      setContacts([...contacts, newContact]);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      alert("Please fill out all fields!");
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-list">
      <h1>Contact List Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email} - {contact.phone}
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactListManager;
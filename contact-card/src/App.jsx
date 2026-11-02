
import React from 'react';
import ContactCard from './components/ContactCard';
import './App.css';

function App() {

  const contacts = [
    {
      name: "yash Patil",
      email: "alice.johnson@example.com",
      phone: "555-1234",
      address: "123 Maple Street, Springfield"
    },
    {
      name: "Aadiiiii ",
      email: "bob.smith@example.com",
      phone: "555-5678",
      address: "456 Oak Avenue, Metropolis"
    },
    {
      name: "patil",
      email: "charlie.brown@example.com",
      phone: "555-8765",
      address: "789 Pine Road, Gotham"
    }
  ];

  return (
    <div className="container">

      <h1>Contact List</h1>

      <div className="contact-list">

        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            address={contact.address}
          />
        ))}

      </div>

    </div>
  );
}

export default App;

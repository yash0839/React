import React from 'react';

function ContactCard({ name, email, phone, address }) {
  return (
    <div className="contact-card">

      <h3>{name}</h3>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <p>
        <strong>Phone:</strong> {phone}
      </p>

      <p>
        <strong>Address:</strong> {address}
      </p>

    </div>
  );
}

export default ContactCard;

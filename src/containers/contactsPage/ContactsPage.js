import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";


export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');    
  };


    useEffect(() => {

      const found = contacts.find((contact) => contact.name === name);
      if (found) {        
        setName("Name already exist")
               
      }   
      if(name === "Name already exist") {
        setPhone('Check the name');
        setEmail('Check the name');          
      }
  },[name , phone, email]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
            />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};

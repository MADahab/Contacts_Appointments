import React from "react";

export const ContactPicker = (contacts, handleContact) => {

  const thelist = () => {contacts.map((contact,index) => {
    return (
      <option value={contact.name} key={index}>
        {contact.name}
      </option>
    );
  })}

  
  return (
    <select onChange={handleContact}>
      <option value="" selected disabled hidden>no contact is selected</option>
      
      {thelist}
      
    </select>
  );
};



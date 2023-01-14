import React, { useState } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  

  const handleTitle = ({ target }) => setTitle(target.value);  
  const handleDate = ({ target }) => setDate(target.value);
  const handleTime = ({ target }) => setTime(target.value);
  const handleContact = ({ target }) => setContact(target.value);



  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  

  return (
   <form onSubmit={handleSubmit}>
      <label for='title' >Appointment</label>
        <input 
          name='title'
          type='text'
          value={title} 
          onChange={handleTitle}   
          required
          placeholder="Appointment"  
          />
      <br/>
      <label for='contact' >Pick Contact</label>
        <select onChange={handleContact} name="contact" value={contact} >
          <option value="" selected disabled hidden>no contact is selected</option>
          {contacts.map((contact,index) => {
            return (
              <option 
                value={contact.name} 
                key={index}
                contact={contact.name}
                >
                {contact.name}
              </option>
            );
          })}         
        </select>
      <br/>
      <label for='date' >Assign Date</label>
        <input
            type="date"
            name="date"
            min={getTodayString()}
            value={date}
            onChange={handleDate}
            required
            placeholder={getTodayString()}
        />
      <br/>
      <label for='time' >Assign Time</label>
        <input
            type="time"
            name="time"
            value={time}
            onChange={handleTime}
            required
        />
      <br/>
      <input type="submit" value="Submit" />
   </form>
  );
};

import React, {useState} from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import  Welcome  from './Welcome'

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
    ])
  }

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts, 
      {
        name: name,
        phone: phone,
        email: email      
      }
    ])
  }



  return (
    <div className='allApp'>

      <nav>
        <NavLink
          className='navLink'
          to={ROUTES.CONTACTS}
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          CONTACTS
        </NavLink>
        <NavLink
          className='navLink'
          to={ROUTES.APPOINTMENTS}
          style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
          APPOINTMENTS
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path={ROUTES.CONTACTS} element={<ContactsPage
          contacts={contacts}
          addContact={addContact} />} />
          <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage
          appointments={appointments}
          addAppointment={addAppointment}
          contacts={contacts} />} />
        </Routes>
      </main>
    </div>    
  );
}

export default App;

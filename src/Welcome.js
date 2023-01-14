import React, {useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";

function Welcome() {

  return (
    <div>
        <h1>Welcome</h1>
    </div>    
  );
}

export default Welcome;

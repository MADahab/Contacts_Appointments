import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  
  const handleName = ({ target }) => setName(target.value);
  const handlePhone = ({ target }) => setPhone(target.value);
  const handleEmail = ({ target }) => setEmail(target.value);

  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          required
          placeholder="Contact Name"          
           />
      <br />
      <label for='phone'>Telephone</label>
        <input
          type="tel"
          value={phone}
          name="phone"
          onChange={handlePhone}
          required
          placeholder="Contact Phone (###-###-####)"
          />
      <br />
      <label for='phone'>E-mail</label>
        <input 
          type="email"
          name='email'
          value={email}
          onChange={handleEmail}
          required
          placeholder="email@example.com"
        />
      <br />  
      <input type="submit" value="Submit" />   
      
    </form>
  );
};

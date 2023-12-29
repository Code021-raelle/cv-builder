import React, { useState } from 'react';

const GeneralInfoForm = () => {
 const [info, setInfo] = useState({ name: '', email: '', phoneNumber: '' });

 const handleChange = (event) => {
   setInfo({ ...info, [event.target.name]: event.target.value });
 };

 const handleSubmit = (event) => {
   event.preventDefault();
   // Display info here
   console.log(info);
 };

 const handleEdit = () => {
   // Reset form
   setInfo({ name: '', email: '', phoneNumber: '' });
 };

 return (
   <form onSubmit={handleSubmit}>
     <label>
       Name:
       <input type="text" name="name" value={info.name} onChange={handleChange} />
     </label>
     <label>
       Email:
       <input type="email" name="email" value={info.email} onChange={handleChange} />
     </label>
     <label>
       Phone Number:
       <input type="tel" name="phoneNumber" value={info.phoneNumber} onChange={handleChange} />
     </label>
     <button type="submit">Submit</button>
     <button type="button" onClick={handleEdit}>Edit</button>
   </form>
 );
};

export default GeneralInfoForm;


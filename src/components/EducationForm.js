import React, { useState } from 'react';

const EducationForm = () => {
 const [education, setEducation] = useState({ schoolName: '', titleOfStudy: '', dateOfStudy: '' });

 const handleChange = (event) => {
   setEducation({ ...education, [event.target.name]: event.target.value });
 };

 const handleSubmit = (event) => {
   event.preventDefault();
   // Display education here
   console.log(education);
 };

 const handleEdit = () => {
   // Reset form
   setEducation({ schoolName: '', titleOfStudy: '', dateOfStudy: '' });
 };

 return (
   <form onSubmit={handleSubmit}>
     <label>
       School Name:
       <input type="text" name="schoolName" value={education.schoolName} onChange={handleChange} />
     </label>
     <label>
       Title Of Study:
       <input type="text" name="titleOfStudy" value={education.titleOfStudy} onChange={handleChange} />
     </label>
     <label>
       Date Of Study:
       <input type="date" name="dateOfStudy" value={education.dateOfStudy} onChange={handleChange} />
     </label>
     <button type="submit">Submit</button>
     <button type="button" onClick={handleEdit}>Edit</button>
   </form>
 );
};

export default EducationForm;


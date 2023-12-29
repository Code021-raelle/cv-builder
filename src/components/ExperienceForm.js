import React, { useState } from 'react';

const ExperienceForm = () => {
 const [experience, setExperience] = useState({ schoolName: '', titleOfStudy: '', dateOfStudy: '' });

 const handleChange = (event) => {
   setExperience({ ...experience, [event.target.name]: event.target.value });
 };

 const handleSubmit = (event) => {
   event.preventDefault();
   // Display experience here
   console.log(experience);
 };

 const handleEdit = () => {
   // Reset form
   setExperience({ schoolName: '', titleOfStudy: '', dateOfStudy: '' });
 };

 return (
   <form onSubmit={handleSubmit}>
     <label>
       School Name:
       <input type="text" name="schoolName" value={experience.schoolName} onChange={handleChange} />
     </label>
     <label>
       Title Of Study:
       <input type="text" name="titleOfStudy" value={experience.titleOfStudy} onChange={handleChange} />
     </label>
     <label>
       Date Of Study:
       <input type="date" name="dateOfStudy" value={experience.dateOfStudy} onChange={handleChange} />
     </label>
     <button type="submit">Submit</button>
     <button type="button" onClick={handleEdit}>Edit</button>
   </form>
 );
};

export default ExperienceForm;


import React from 'react';
import './App.css';
import GeneralInfoForm from './components/GeneralInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';

function App() {
  return (
    <div>
	  <h1>CV Builder</h1>
	  <GeneralInfoForm />
	  <EducationForm />
	  <ExperienceForm />
    </div>
  );
}

export default App;

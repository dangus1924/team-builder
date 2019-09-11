import React, { useState } from 'react';

function Form(props) {
  const initialTeam = { name:"", email:"", role:"", location:"" }
  const [newTeam, setNewTeam] = useState({initialTeam})

  const handleChange = event => {
    setNewTeam({
      ...newTeam,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!newTeam.name || !newTeam.email || !newTeam.role || !newTeam.location) {
      alert("please fill in the blanks.")
    } else {
      props.setTeam([newTeam, ...props.Form]);
      resetForm();
    }    
  };
   const resetForm = () => {
     setNewTeam(initialTeam)
   } ;

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <h1>Fill Out The Form</h1>
        <label>
          <input 
            type="text" 
            name="name" 
            value={newTeam.name}
            placeholder="Name..." 
            onChange={event => handleChange(event)} 
          />
        </label>
        <label>
          <input 
            type="text" 
            name="email" 
            value={newTeam.email} 
            placeholder="Email..." 
            onChange={event => handleChange(event)} 
          />
        </label>
        <label>
          <input 
          type="text" 
          name="role" 
          value={newTeam.role} 
          placeholder="Role..." 
          onChange={event => handleChange(event)} 
        />
        </label>
        <label>
          <input 
          type="text" 
          name="location" 
          placeholder="Location..." 
          value={newTeam.location} 
          onChange={event => handleChange(event)} 
        />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
    </form>
    </div>
  )
}

export default Form;
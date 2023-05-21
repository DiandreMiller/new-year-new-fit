import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './CreateAUserComponent.css'

const CreateAUserComponent = () => {
  const [addAUser, setAddAUser] = useState({
    username: '',
    age: '',
    height: `4'0`,
    weight:'',
    dateofbirth: '',
    fitness_level: '',
    gender: '',
    workout_type: '',
    photo_link: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('data', addAUser)
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/users`, addAUser)
      .then(() => {})
      .catch((error) => console.log('error:', error));
    navigate("/users");
  };

  const handleInputChange = (event) => {
    console.log('addAUser',addAUser)
    const { id, value } = event.target;
    console.log('id', id)
    console.log('value', value)
    setAddAUser({...addAUser, [id]: value });
  };

  const convertToFeetAndInches = (height) => {
    const feet = Math.floor(height / 12);
    const inches = height % 12;
    return `${feet}'${inches}`;
  };

  const convertToInches = (height) => {
    const [feet, inches] = height.split("'");
    return parseInt(feet) * 12 + parseInt(inches);
  };

  
  const heightOptions = [];
  for (let feet = 4; feet <= 8; feet++) {
    for (let inches = 0; inches <= 11; inches++) {
      const height = `${feet}'${inches}`;
      heightOptions.push(height);
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a user page</h3>
      <div className="label_container">
      <label htmlFor="username">User Name:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={addAUser.username}
        onChange={handleInputChange}
        required
      />
      <br />
      <br />

      <label htmlFor="age">Age: </label>
      <input
        type="number"
        id="age"
        name="age"
        value={addAUser.age}
        onChange={handleInputChange}
        required
      />
      <br />
      <br />

      <label htmlFor="dateofbirth">Date Of Birth</label>
      <input
        type="date"
        id="dateofbirth"
        name="dateofbirth"
        value={addAUser.dateofbirth}
        onChange={handleInputChange}
        required
      />
      <br />
      <br />

      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
        name="gender"
        value={addAUser.gender}
        onChange={handleInputChange}
        required
      >
        <option value=" ">Select a gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br />
      <br />

      <label htmlFor="height">Height:</label>
      <select
        id="height"
        name="height"
        value={convertToFeetAndInches(addAUser.height)}
        onChange={(e) =>
          setAddAUser({
            ...addAUser,
            height: convertToInches(e.target.value),
          })
        }
        required
      >
        {heightOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <br />

      <label htmlFor="weight">Weight:</label>
      <input
        type="number"
        id="weight"
        name="weight"
        value={addAUser.weight}
        onChange={handleInputChange}
        required
      />
      <br />
      <br />

      <label htmlFor="fitness_level">Fitness Level:</label>
      <select
        type="text"
        id="fitness_level"
        name="fitness_level"
        value={addAUser.fitness_level}
        onChange={handleInputChange}
        required
      >
        <option value=''>Select a fitness level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <br />
      <br />
      
      <label htmlFor="workout_type">Workout Type: </label>
      <input
        type="text"
        id="workout_type"
        name="workout_type"
        value={addAUser.workout_type}
        onChange={handleInputChange}
        required
      />
      <br />
      <br />

      <label htmlFor="photo_link">Photo: </label>
      <input
        type="text"
        id="photo_link"
        name="photo_link"
        value={addAUser.photo_link}
        onChange={handleInputChange}
        required
      />
      <br />
      <br />
      </div>

      <button>Save User</button>
    </form>
  );
};

export default CreateAUserComponent;

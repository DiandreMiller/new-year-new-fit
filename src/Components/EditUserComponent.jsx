import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditUserComponent = () => {
  const [editUser, setEditUser] = useState({
    username: '',
    age: 0,
    height: `4'0`,
    weight:'',
    dateofbirth: '',
    fitness_level: 'Beginner',
    gender: 'Male',
    workout_type: '',
    photo_link: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/users/${id}`)
      .then((response) => {
        setEditUser(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const convertToFeetAndInches = (height) => {
    const feet = Math.floor(height / 12);
    const inches = height % 12;
    return `${feet}'${inches}`;
  };

  const convertToInches = (height) => {
    const heightParts = height.split("'").map((part) => part.trim());
    if (heightParts.length === 2) {
      const feet = parseInt(heightParts[0]);
      const inches = parseInt(heightParts[1]);
      if (!isNaN(feet) && !isNaN(inches)) {
        return feet * 12 + inches;
      }
    } else {
      const numericHeight = parseInt(height);
      if (!isNaN(numericHeight)) {
        return numericHeight;
      }
    }
    return null;
  };

  const heightOptions = [];
  for (let feet = 4; feet <= 8; feet++) {
    for (let inches = 0; inches <= 11; inches++) {
      const height = `${feet}'${inches}`;
      heightOptions.push(height);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { id, ...data } = editUser;
      await axios.put(
        `${process.env.REACT_APP_BACKEND_API}/users/${id}`,
        data
      );
      navigate(`/users/${id}`);
    } catch (error) {
      console.log(error);
      console.log("of course it is not working");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit a user form</h3>

      <label htmlFor="">User Name: </label>
      <input
        type="text"
        id="username"
        name="username"
        value={editUser.username}
        onChange={handleInputChange}
      />

      <label htmlFor="">Date of Birth: </label>
      <input
        type="date"
        id="dateofbirth"
        name="dateofbirth"
        value={editUser.dateofbirth}
        onChange={handleInputChange}
      />
      <br /> <br />
      <label htmlFor="gender">Gender: </label>
      <select
        id="gender"
        name="gender"
        value={editUser.gender}
        onChange={handleInputChange}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br /> <br />
      <label htmlFor="height">Height: </label>
      <label htmlFor="height">Height:</label>
      <select
        id="height"
        name="height"
        value={convertToFeetAndInches(editUser.height)}
        onChange={(e) =>
          setEditUser({
            ...editUser,
            height: convertToInches(e.target.value),
          })
        }
      >
        {heightOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br /> <br />
      <label htmlFor="weight">Weight: </label>
      <input
        type="number"
        id="weight"
        name="weight"
        value={editUser.weight}
        onChange={handleInputChange}
      />
      <br /> <br />
      <label htmlFor="fitnessLevel">Fitness Level:</label>
      <select
        type="text"
        id="fitness_level"
        name="fitness_level"
        value={editUser.fitness_level}
        onChange={handleInputChange}
      >
        <option disabled>---SELECT AN OPTION---</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <br /> <br />

      <label htmlFor="photo_link">Photo: </label>
      <input
        type="text"
        id="photo_link"
        name="photo_link"
        value={editUser.photo_link}
        onChange={handleInputChange}
      />
      <button>Save</button>
    </form>
  );
};

export default EditUserComponent;

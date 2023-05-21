import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DeleteComponent from "./DeleteComponent";
import OneUserWorkoutComponent from "../ComponentWorkout/OneUserWorkout";
import CreateAWorkoutComponent from '../ComponentWorkout/CreateAWorkoutComponent'


const GetOneUserComponent = () => {

  const [showWorkouts, setShowWorkouts] = useState(false)
  const [showAddAWorkout, setShowAddAWorkout] = useState(false)
  
  const [getAUser, setGetAUser] = useState({
    name: '',
    duration: '',
    calories_burned: 0,
    workout_type: '',
    workout: '',
    weight_pounds_lifted: 0,
    workout_reps: 0
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/users/${id}`)
      .then((response) => {
        console.log(response.data);
        setGetAUser(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  
  const convertHeightToFeetInches = (height) => {
    const feet = Math.floor(height / 12);
    const inches = height % 12;
    return `${feet}'${inches}`;
  };


    console.log('test', getAUser)
    
    const formatDateOfBirth = () => {
        if (getAUser && getAUser.dateofbirth) {
          const [year, month, day] = getAUser.dateofbirth.split("-");
          return `${month}/${day}/${year}`;
        }
        return null;
    };
  
  const handleShowWorkout = () => {
    setShowWorkouts(true)
  }

  const handleAddAWorkout = () => {
    setShowAddAWorkout(true)
  }
      
  return (
    <div>
      <h3>{getAUser.username}</h3>
      <p>Age: {getAUser.age}</p>
      <p>Date of Birth: {formatDateOfBirth(getAUser.dateofbirth)}</p>
      <p>Gender: {getAUser.gender}</p>
      <p>Height: {convertHeightToFeetInches(getAUser.height)}</p>
      <p>Weight: {getAUser.weight}</p>
      <p>Fitness Level: {getAUser.fitness_level}</p>
      <img src={getAUser.photo_link} alt={getAUser.name} height='150px' />
      
      <Link to={`/users/${getAUser.id}/edit`}><button>Edit</button></Link>
      <DeleteComponent/>
         
      <button onClick={handleShowWorkout}>See Workout Log</button>

      {showWorkouts && <OneUserWorkoutComponent/>}
      
      <button onClick={handleAddAWorkout}>Add A Workout</button>

      {showAddAWorkout && <CreateAWorkoutComponent />}
      
      
    </div>
  );
};

export default GetOneUserComponent;

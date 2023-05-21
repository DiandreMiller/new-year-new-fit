import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import DeleteWorkoutComponent from "./DeleteWorkoutComponent";


const OneUserWorkoutComponent = () => {

    const [getWorkout, setGetWorkout] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/workouts/${id}`)
            .then(response => {
            console.log('getWorkout',response.data)
            setGetWorkout(response.data)
            })
        .catch(error => console.log(error))
    }, [id])
    
    
    return ( 

        <div>
            <p>Category: {getWorkout.workout_type}</p>
            <p>Area Worked: {getWorkout.workout}</p>
            <p>Workout: {getWorkout.name}</p>
            <p>Duration: {getWorkout.duration}</p>
            <p>Calories Burned: {getWorkout.calories_burned}</p>
            <p>Pounds Lifted: {getWorkout.weight_pounds_lifted}</p>
            <p>Number of reps: {getWorkout.workout_reps}</p>

            <Link to={`/users/workout/${id}/edit`}><button className="button">Edit Workout</button></Link>
            
            <DeleteWorkoutComponent />


        </div>
       
    )
}

export default OneUserWorkoutComponent
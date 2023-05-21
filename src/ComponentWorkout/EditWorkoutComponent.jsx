import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './EditWorkoutComponent.css'

const EditWorkoutComponent = () => {

    const [editWorkout, setEditWorkout] = useState({
        name: '',
        duration: '',
        calories_burned: 0,
        workout_type: '',
        workout: '',
        weight_pounds_lifted: 0,
        workout_reps: 0
    })
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${process.env.REACT_APP_BACKEND_API}/workouts/${id}`)
            .then(response => {
                setEditWorkout(response.data)
                setIsLoading(false)
                console.log(response.data)
            })
        .catch(error => console.log(error))
    }, [id])
    
    if (isLoading) {
        return (
            <div>Page Loading...</div>
        )
            
        
    }

    const handleTextInput = (event) => {
        const { name, value } = event.target
        setEditWorkout({...editWorkout, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const { id, ...data } = editWorkout;
          await axios.put(`${process.env.REACT_APP_BACKEND_API}/workouts/${id}`,data);
          navigate(`/users/workout/${id}`);
        } catch (error) {
          console.log(error);
          console.log("it never works");
        }
      };
    

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit a workout</h3>

            <label htmlFor="">Category: </label>
            <input
                type='text'
                id='workout_type'
                name='workout_type'
                value={editWorkout.workout_type}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="Workout">Area Worked: </label>
            <input
                type='text'
                id='workout'
                name='workout'
                value={editWorkout.workout}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="name">Workout: </label>
            <input
                type='text'
                id='name'
                name='name'
                value={editWorkout.name}
                onChange={handleTextInput}
            />
            <br /> <br />
            
            <label htmlFor="duration">Duration: </label>
            <input
                type='text'
                id='duration'
                name='duration'
                value={editWorkout.duration}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="">Calories Burned: </label>
            <input
                type='number'
                id='calories_burned'
                name='calories_burned'
                value={editWorkout.calories_burned}
                onChange={handleTextInput}
            />
            <br /> <br />


            <label htmlFor="weight_pounds_lifted">Pounds Lifted: </label>
            <input
                type='number'
                id='weight_pounds_lifted'
                name='weight_pounds_lifted'
                value={editWorkout.weight_pounds_lifted}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="workout_reps">Number of reps: </label>
            <input
                type='number'
                id='workout_reps'
                name='workout_reps'
                value={editWorkout.workout_reps}
                onChange={handleTextInput}
            />
            <br /> <br />

            <button>Edit Workout</button>
            
        </form>
    )
}

export default EditWorkoutComponent
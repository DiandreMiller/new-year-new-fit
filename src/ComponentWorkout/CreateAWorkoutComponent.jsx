import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateAWorkoutComponent = () => {

    const [createAWorkout, setCreateAWorkout] = useState({
        name: '',
        duration: '',
        calories_burned: 0,
        workout_type: '',
        workout: '',
        weight_pounds_lifted: 0,
        workout_reps: 0
    })
    const navigate = useNavigate()
    const {id} = useParams()

    const handleTextInput = (event) => {
        const { name, value } = event.target
        setCreateAWorkout({...createAWorkout, [name]: value})

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_API}/workouts/${id}`, createAWorkout)
            .then(() => { })
            .catch(error => console.log(error))
        navigate(`/users/workout/${id}`)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h3>Create A Workout</h3> 

            <label htmlFor="">Category: </label>
            <input
                type='text'
                id='workout_type'
                name='workout_type'
                value={createAWorkout.workout_type}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="Workout">Area Worked: </label>
            <input
                type='text'
                id='workout'
                name='workout'
                value={createAWorkout.workout}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="name">Workout: </label>
            <input
                type='text'
                id='name'
                name='name'
                value={createAWorkout.name}
                onChange={handleTextInput}
            />
            <br /> <br />
            
            <label htmlFor="duration">Duration: </label>
            <input
                type='text'
                id='duration'
                name='duration'
                value={createAWorkout.duration}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="">Calories Burned: </label>
            <input
                type='number'
                id='calories_burned'
                name='calories_burned'
                value={createAWorkout.calories_burned}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="weight_pounds_lifted">Pounds Lifted: </label>
            <input
                type='number'
                id='weight_pounds_lifted'
                name='weight_pounds_lifted'
                value={createAWorkout.weight_pounds_lifted}
                onChange={handleTextInput}
            />
            <br /> <br />

            <label htmlFor="workout_reps">Number of reps: </label>
            <input
                type='number'
                id='workout_reps'
                name='workout_reps'
                value={createAWorkout.workout_reps}
                onChange={handleTextInput}
            />
            <br /> <br />

            <button>Submit</button>
            
        </form>
    )
}

export default CreateAWorkoutComponent
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"



const DeleteWorkoutComponent = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        if (window.confirm('Are You Sure You Want to Delete Workout')) {
            if (window.confirm('This Action Cannot be Undone')) {
                axios.delete(`${process.env.REACT_APP_BACKEND_API}/workout/${id}`)
                navigate(`/users/${id}`)
            }
            
        }
    }
    
    return (
            <button className="button" onClick={handleDelete}>Delete Workout</button>
    )
}

export default DeleteWorkoutComponent
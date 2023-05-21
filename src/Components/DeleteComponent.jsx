import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const DeleteComponent = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this User?')) {
            if (window.confirm('THIS ACTION CANNOT BE UNDONE. Are you really, really sure?')) {
                axios.delete(`${process.env.REACT_APP_BACKEND_API}/users/${id}`)
                navigate('/users')
            }
        }
    }

    return (
        <button onClick={handleDelete}>Delete User</button>
    )
}

export default DeleteComponent
import axios from "axios";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import UploadPhotoComponent from "./UploadPhotoComponent.jsx";

const GetAllUsersComponent = () => {

    const [getAllUsers, setGetAllUsers] = useState([])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/users`)
            .then(response => {
                setGetAllUsers(response.data)
                console.log(response.data)
            })
        .catch(error => console.log(error))
    }, [])



    return (

        <div>
        <h2>This is all users</h2>

            {getAllUsers &&
              
                <>
                {getAllUsers.map((user) => {
                    return <div key={user.id}>
                        <Link to={`/users/${user.id}`}><h3>{user.username}</h3></Link>
                        {/* <UploadPhotoComponent/> */}
                        <img src={user.photo_link} alt={user.username} height='150px' />
                     

                        </div>
                    })}

                </>}
            
        </div>
    )
}

export default GetAllUsersComponent
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>This page does not exist. Please visit our <Link to='/'>home page</Link></h1>
        </div>
    )
}

export default Error
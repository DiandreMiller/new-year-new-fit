import { useState } from "react";
import { auth } from '../../Components/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error message

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        console.log('userCredentials', userCredentials);
      })
      .catch(error => {
        setError(error.message); // Set error message in state
        console.log(error);
      });
  };

  return (
    <div className="sign_up_container">
      <h3>Create An Account</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          name="email"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br /><br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          name="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br /><br />
        <button>Sign Up</button>
      </form>
      {error && <p className="error_message">{error}</p>} {/* Display error message if it exists */}
    </div>
  );
};

export default SignUp;

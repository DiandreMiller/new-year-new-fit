import { useState } from "react";
import { auth } from '../../Components/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        console.log('userCredentials', userCredentials);
        navigate('/users');
      })
      .catch(error => {
        setError(error.message); 
        console.log(error);
      });
  };

  return (
    <div className="sign_in_container">
      <h3>Sign In to Your Account</h3>
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
        <button>Sign In</button>
      </form>
      {error && <p className="error_message">{error}</p>} 
    </div>
  );
};

export default SignIn;

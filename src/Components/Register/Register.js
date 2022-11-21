import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../Firebase.init";
import "./Register.css";

const Register = () => {
  const [createUserWithEmailAndPassword, hookUser, hookLoading, hookError] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  if (hookUser || googleUser) {
    navigate("/");
  }
  return (
    <div className="login">
      <div className="form-container">
        <form className="form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input placeholder="Email" name="email" type="email" />
          <input placeholder="Password" name="password" type="password" />
          <input type="submit" value="Register" />
        </form>

        <div className="or">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <div className="googleLogin">
          <button onClick={() => signInWithGoogle()}>
            <FcGoogle></FcGoogle> Continue with Gooogle
          </button>
        </div>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

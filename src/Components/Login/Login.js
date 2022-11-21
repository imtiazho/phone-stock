import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password)
  };

  if (googleUser || user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login">
      <div className="form-container">
        <form className="form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input placeholder="Email" name="email" type="email" />
          <input placeholder="Password" name="password" type="password" />
          <input type="submit" value="Login" />
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
          Don't have any account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

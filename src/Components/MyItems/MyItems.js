import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";

const MyItems = () => {
  const [shoes, setShoes] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const { email } = user;
    
  useEffect(() => {
    fetch(`http://localhost:5000/myItems?email=${email}`)
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, [email]);
    
    return <div>{ shoes.length}</div>;
};

export default MyItems;

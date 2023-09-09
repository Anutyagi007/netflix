import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // console.log(user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
          
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
      });
      return ()=>unsubscribe();
    },[])

  return (
    <div className="flex justify-between absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-40">
      <img
        src={LOGO}
        className="w-52"
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img src={user?.photoURL} className="h-10 my-6" alt="user-icon" />
          <button onClick={handleSignout}>Signout</button>
        </div>
      )}
    </div>
  );
};

export default Header;

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch)
  // console.log(user);
  const handleSubmitGPTSearch=()=>{
    dispatch(toggleGPTSearchView())
  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
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
    <div className="flex justify-between absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-40 text-white">
      <img
        src={LOGO}
        className="w-52"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          {showGPTSearch && <select className="p-2 h-12 mt-6 bg-black text-white" onChange={handleLanguageChange}>
            {
              SUPPORTED_LANGUAGE.map(lang=> <option value={lang.identifier}>{lang.name}</option>)
            }
          </select>}
          <button className="rounded-lg h-12 p-2 m-6 bg-purple-800 text-white" onClick={handleSubmitGPTSearch}>{ showGPTSearch ? "Browse": "GPT Search"}</button>
          <img src={user?.photoURL} className="h-10 my-6" alt="user-icon" />
          <button onClick={handleSignout}>Signout</button>
        </div>
      )}
    </div>
  );
};

export default Header;

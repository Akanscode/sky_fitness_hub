import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider  = ({ children }) => {

   const [user, setUser] = useState(null);


  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
    
  }

  function updateUser(username) {
    return updateProfile(auth.currentUser, { displayName: username });
  }

  function signout() {
    // console.log(auth);
    return signOut(auth);
  }

  function resetEmail(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function upload(currentUser, setLoading, file, setPhotoURL) {
    const imageRef = ref(storage, currentUser.uid);
    setLoading(true);
    uploadBytes(imageRef, file)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setPhotoURL(url);
            updateProfile(user, { photoURL: url });
            toast.success("profile updated successfully");
            setLoading(false);
            console.log(user?.photoURL);
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        updateUser,
        signin,
        signout,
        resetEmail,
        upload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
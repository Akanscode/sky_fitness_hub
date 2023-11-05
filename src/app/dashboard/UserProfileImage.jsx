
import React, { useContext, useState, useEffect, useRef } from "react";
import { useAuth } from "../context/UserAuth";
import Image from 'next/image';


const UserProfileImage = ({ open, handleOpen, setOpen }) => {
  //default image
  const [photoURL, setPhotoURL] = useState(
    "/assets/blank-profile.png"
  );
  //updating the image profile
  const [photo, setPhoto] = useState(null);
  const resetRef = useRef();

  const onChangeImage = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setPhoto(imageFile);
    }
  };
  

  const { user, upload } = useContext(useAuth);
  // console.log(user)
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    if (!photo) return;

    upload(user, setLoading, photo, setPhotoURL);
    handleResetImage();
    setOpen(false);
  };

  const handleResetImage = () => {
    resetRef.current.value = "";
  };

  //use useEffect hook to update the profile pic once changed
  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user?.photoURL);
    }
  }, [user]);


    return (
        <>
            <div className="flex items-center ">
                <Image
                    src={photoURL}
                    alt="blank profile pic"
                    className="w-12 rounded-full drop-shadow-lg lg:drop-shadow-md cursor-pointer"
                    onClick={handleOpen}
                />
            </div>
            <aside
                className={
                    open ? "show_input hide_input" : "show_input"
                }
            >
                {/* input file */}
                <input
                    type="file"
                    name=""
                     id=""
                    className="block mb-2"
                    accept="image/*"
                    onChange={onChangeImage}
                    ref={resetRef}
                 />
                {/* button */}
                <button
                    className="bg-status-purple-40 capitalize px-5 py-2 rounded-lg text-dull-white font-semibold  hover:bg-status-purple-50 duration-300"
                    disabled={loading || !photo}
                    onClick={handleUpload}
                >
                    upload
                </button>
            </aside>
        </>
  )
}

export default UserProfileImage
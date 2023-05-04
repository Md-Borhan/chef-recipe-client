import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import Loader from "../loader/Loader";

const UserDetailsPage = () => {
  const { user, loader } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const handleClose = () => {
    if (navigate) {
      navigate(-1);
    }
  };
  if (loader) {
    return <Loader></Loader>;
  }
  return (
    user && (
      <div className="px-5 sm:h-[calc(100vh-200px)] ">
        <div className="w-full relative px-5 sm:px-0 py-5 sm:py-0 lg:w-1/2 sm:flex items-center h-full sm:h-56 justify-center 2xl:w-1/3 mx-auto shadow-md gap-4 text-center sm:text-left rounded-md my-10 shadow-blue-200">
          <img
            className="w-28 border border-red-400 h-28 mx-auto sm:mx-0 rounded-full"
            src={user.photoURL}
            alt=""
          />
          <div className="">
            <p className="mb-2 font-medium text-2xl">
              User Name: {user.displayName}
            </p>
            <p className="">
              User Email: {user.email ? user.email : "not available"}
            </p>
            <p>
              User Phone Number:{" "}
              {user.phoneNumber ? phoneNumber : "not available"}
            </p>
          </div>
          <div className="text-center absolute top-4 cursor-pointer right-4">
            <span
              title="Close"
              onClick={handleClose}
              className="text-3xl text-red-500"
            >
              <RxCrossCircled></RxCrossCircled>
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default UserDetailsPage;

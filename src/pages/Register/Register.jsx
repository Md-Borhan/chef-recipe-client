import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 6) {
      setErrorText("😔 Password at least 6 character longer!");
      return;
    }

    setSuccessText("");
    setErrorText("");
    createUserWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccessText("😃 User Create Success!!!");
        updateUserProfile(name, photo)
          .then(() => {
            console.log("User Profile update");
          })
          .catch((error) => {
            setErrorText(error.message);
          });
        form.reset();
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };
  return (
    <div className="px-3">
      <div className="w-full md:w-2/4 xl:w-1/3 mx-auto bg-gray-200  my-5 rounded-lg shadow-blue-100 shadow-md">
        <div className="card-body">
          <h2 className="text-center text-2xl sm:text-3xl font-bold">
            Create New Account
          </h2>
          <form onSubmit={handleForm}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="name"
                className="input shadow-blue-200 shadow-md input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input shadow-blue-200 shadow-md input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                required
                placeholder="photo url"
                className="input shadow-blue-200 shadow-md input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input shadow-blue-200 shadow-md input-bordered"
              />
            </div>
            <p className="text-error mt-3">{errorText}</p>
            <p className="text-success mt-3">{successText}</p>
            <div className="form-control mt-4">
              <button className="btn btn-error shadow-blue-200 shadow-md">
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>
              Already have an account?{" "}
              <Link className="text-primary underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

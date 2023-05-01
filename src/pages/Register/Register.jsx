import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="w-1/3 mx-auto bg-gray-200  my-5 rounded-lg shadow-blue-100 shadow-md">
      <div className="card-body">
        <h2 className="text-center text-3xl font-bold">Please Register</h2>
        <form onSubmit={handleForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input shadow-blue-200 shadow-md input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
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
              placeholder="password"
              className="input shadow-blue-200 shadow-md input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-error shadow-blue-200 shadow-md">
              Login
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
  );
};

export default Register;

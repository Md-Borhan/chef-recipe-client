import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  setErrorText("");
  setSuccessText("");
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
        <h2 className="text-center text-3xl font-bold">Please Login</h2>
        <form onSubmit={handleForm}>
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input shadow-blue-200 shadow-md input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-error shadow-blue-200 shadow-md">
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <button className="flex w-full btn btn-error shadow-blue-200 shadow-md items-center font-semibold  justify-center border border-red-400 rounded-lg mt-5 gap-1 text-black py-3">
            <span>Login With Google</span>
            <span className="text-lg">
              <FaGoogle></FaGoogle>
            </span>
          </button>
          <button className="flex mb-4 w-full btn btn-error items-center shadow-blue-200 shadow-md font-semibold  justify-center border border-red-400 rounded-lg mt-5 gap-1 text-black py-3">
            <span>Login With Github</span>
            <span className="text-xl">
              <FaGithub></FaGithub>
            </span>
          </button>
          <p>
            Don't have account?{" "}
            <Link className="text-primary underline" to="/register">
              Create
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

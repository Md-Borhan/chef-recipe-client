import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { loginWithEmail, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const [user, setUser] = useState(null);
  console.log(user);

  const from = location.state?.from?.pathname || "/";

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorText("");
    setSuccessText("");

    loginWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setSuccessText("😃 User login success!!!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };

  const handleGithubLogin = () => {
    loginWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };
  return (
    <div className="px-3">
      <div className="w-full sm:w-4/5  md:w-3/5 xl:w-2/5 2xl:w-1/3 sm:mx-auto bg-gray-200  my-5 rounded-lg shadow-blue-100 shadow-md">
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
                required
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
                required
                placeholder="password"
                className="input shadow-blue-200 shadow-md input-bordered"
              />
            </div>
            <p className="text-success">{successText}</p>
            <p className="text-error">{errorText}</p>
            <div className="form-control mt-4">
              <button className="btn btn-error shadow-blue-200 shadow-md">
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col sm:flex-row justify-between">
            <button
              onClick={handleGoogleLogin}
              className="flex lg:mb-4 w-full sm:w-[48%]  btn btn-error bg-transparent items-center shadow-blue-200 shadow-md font-semibold  justify-center border border-red-400 rounded-full mt-5 gap-1 text-black md:py-3"
            >
              <span>Login With Google</span>
              <span className="text-lg">
                <FaGoogle></FaGoogle>
              </span>
            </button>
            <button
              onClick={handleGithubLogin}
              className="flex w-full  sm:w-[48%] mb-4  btn btn-error bg-transparent items-center shadow-blue-200 shadow-md font-semibold  justify-center border border-red-400 rounded-full mt-5 gap-1 text-black md:py-3"
            >
              <span>Login With Github</span>
              <span className="text-xl">
                <FaGithub></FaGithub>
              </span>
            </button>
          </div>
          <p className="text-center">
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

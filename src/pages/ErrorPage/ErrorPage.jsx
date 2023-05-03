import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import errorPage from "../../assets/error-page.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const error = useRouteError();
  return (
    <div className="flex errorPage flex-col items-center justify-center h-screen">
      {/* <img className="w-80 " src={errorPage} alt="" /> */}
      <h1 className="font-bold text-black text-7xl">Oops!</h1>
      <p className="text-2xl text-black">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-2xl font-bold text-black">
        <i>{error.statusText || error.message}</i>
      </p>
      <span className="mt-4" onClick={handleGoBack}>
        <button className="btn btn-error">Go Back</button>
      </span>
    </div>
  );
};

export default ErrorPage;

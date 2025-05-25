import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import errorImg from "../assets/error.jpg";
import { Helmet } from "@dr.pogodin/react-helmet";

const Error = () => {
  return (
    <section className="login py-25">
           <Helmet>
      <title>Planto | 404
      </title>
    </Helmet>
      <div className="container max-w-[800px] mx-auto text-center px-5">
        <div className="mb-8">
          <img src={errorImg} alt="" className="max-w-full rounded-2xl" />
          <h2 className="text-3xl font-medium text-red-600 my-8">
            Page Not Found
          </h2>
          <p className="text-lg">
            🌱 404 – Page Not Found. Looks like this part of your garden doesn't
            exist yet.
          </p>
        </div>

        <div className="inline-block">
          <Link
            to={"/"}
            className="bg-[#204e36] hover:bg-transparent border border-[#204e36] text-white hover:text-[#204e36] px-6 py-3 rounded-md transition text-center flex items-center gap-2"
          >
            <FaArrowLeft></FaArrowLeft> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;

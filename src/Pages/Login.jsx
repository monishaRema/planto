import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Contex/AuthContex";
import { FaGoogle} from "react-icons/fa";
import { Helmet } from "@dr.pogodin/react-helmet";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import Swal from "sweetalert2";
import { Slide, toast } from "react-toastify";

const Login = () => {
  const [showpassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { Login, GoogleSignIn, setUser } = use(AuthContext);

  const location = useLocation();
  const locationState = location.state;
  const navigate = useNavigate();
  // if (user) {
  //   return <Navigate to="/"></Navigate>;
  // }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setErrorMessage("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }
    if (!hasLowercase) {
      setErrorMessage("Password must include at least one lowercase letter.");
      return;
    }
    if (!hasUppercase) {
      setErrorMessage("Password must include at least one uppercase letter.");
      return;
    }
    if (!hasNumber) {
      setErrorMessage("Password must include at least one number.");
      return;
    }

    Login(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          position: "center center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        if (locationState) {
          navigate(locationState);
        } else {
          navigate("/");
        }
      })
      .catch(() => {
        toast.error("Please provide valid credentials", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
      });
  };

  const handleGoogle = () => {
    GoogleSignIn()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          position: "center center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        if (locationState) {
          navigate(locationState);
        } else {
          navigate("/");
        }
      })
      .catch((err) => setErrorMessage(err.message));
  };




  return (
    <section className="login py-15 md:py-25">
      <div className="container mx-auto px-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white text-black shadow-lg rounded-lg  gap-5 items-center overflow-hidden min-h-[600px]">
          <Helmet>
            <title>Planto | Login</title>
          </Helmet>
          <div className="img-box w-full md:w-1/2 h-auto md:h-[600px]">
            <img
              className="w-full h-full object-cover"
              src="https://static.vecteezy.com/system/resources/previews/007/449/300/large_2x/hand-holdig-plant-growing-on-green-background-with-sunshine-free-photo.jpg"
              alt=""
            />
          </div>
          <div className="form-box w-full md:w-1/2 p-6 md:p-10">
            <h2 className="text-3xl font-bold mb-1 text-[#6A8C25]">Login</h2>
            <p className="mb-7 text-gray-500">
              Login to continue your plant care journey
            </p>
            <div className="social-login mt-5">
              <button
                onClick={handleGoogle}
                className=" text-white bg-[#204e36] hover:bg-[#6A8C25] w-full flex items-center gap-2 py-2 px-5 text-center rounded-md justify-center"
              >
                <FaGoogle size={20}></FaGoogle>
                <span>Continue With Google</span>
              </button>
            </div>
            <div className="flex items-center my-4 gap-2">
              <hr className="flex-grow border-gray-300" />
              <span className="text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <form onSubmit={handleLogin} className="w-full">
              <div className="form-group mb-5">
                <label htmlFor="email" className="block mb-2 ">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-200 rounded focus:border-lime-300 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group mb-5 relative">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <input
                  type={showpassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full p-3 border border-gray-200 rounded focus:border-lime-300 outline-none"
                  placeholder="Enter your password"
                  required
                />

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showpassword);
                  }}
                  className="absolute top-12 right-6 text-[#6A8C25]"
                >
                  {showpassword ? (
                    <LuEye size={24}></LuEye>
                  ) : (
                    <LuEyeClosed size={24}></LuEyeClosed>
                  )}
                </button>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm text-center my-3">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className="bg-[#6A8C25] text-white hover:bg-[#204e36] w-full flex items-center gap-2 py-2 px-5 text-center rounded-md justify-center font-semibold"
              >
                LOGIN
              </button>
            </form>

            <div className="">
              <p className="font-semibold text-center mt-2">
                Dont’t Have An Account ?{" "}
                <Link className="text-[#6A8C25] hover:text-[#204e36]" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

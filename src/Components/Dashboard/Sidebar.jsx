import React, { use } from "react";
import { FaLeaf, FaSeedling, FaPlusCircle, FaListAlt, FaHome } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import ToggleTheme from "../Header/ToggleTheme";
import { AuthContext } from "../../Contex/AuthContex";
import Swal from "sweetalert2";
import { Slide, toast } from "react-toastify";

const sidebarLinks = [

  { name: "Dashboard", icon: <FaLeaf />, href: "/dashboard" },
  { name: "Home", icon: <FaHome />, href: "/" },
  { name: "My Plants", icon: <FaSeedling />, href: "/dashboard/my-plants" },
  { name: "Add Plant", icon: <FaPlusCircle />, href: "/dashboard/add-plant" },
  { name: "All Plants", icon: <FaListAlt />, href: "/dashboard/all-plants" },
];

  const navVarient = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

const Sidebar = ({ open, setOpen }) => {
    const { user, LogOut, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const photoUrl = user && user.photoURL ? user.photoURL : "";
    const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF9F00",
      cancelButtonColor: "#6A8C25",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        LogOut()
          .then(() => {
            setUser(null);
            navigate('/login')
          })
          .catch((err) => {
            toast.error(err.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
            });
          });
      }
    });
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        className={`
        z-30 h-screen w-64 bg-white dark:bg-[#204e36] p-6 pt-10 space-y-4
        transition-transform duration-300 fixed lg:sticky top-0 left-0 shadow-2xl
        ${open ? "translate-x-0 block" : "-translate-x-full hidden"}
        lg:relative lg:translate-x-0 lg:block
      `}
      >
        <div className="flex justify-between gap-5">
      <Link className="flex items-center gap-1" to="/">
                <motion.img
                  variants={navItemVariants}
                  className="size-10 md:size-15"
                  src={Logo}
                  alt=""
                />

                <motion.span
                  variants={navItemVariants}
                  className="text-xl md:text-2xl font-bold text-[#6A8C25] dark:text-white"
                >
                  Planto.
                </motion.span>
              </Link>

              <ToggleTheme></ToggleTheme>
        </div>
  
        <nav>
          {sidebarLinks.map((link) => (
            <Link
              to={link.href}
              key={link.name}
              onClick={() => setOpen(false)}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg text-lg
                ${
                  location.pathname === link.href
                    ? "bg-green-50 dark:bg-[#335a29] font-bold"
                    : ""
                }
                text-[#6A8C25] dark:text-yellow-100 hover:bg-green-50 dark:hover:bg-[#335a29] mb-1 transition-colors
              `}
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </Link>
          ))}
           <button
                    onClick={handleLogOut}
                    className="mt-5 rounded px-2 md:px-4 py-1 text-sm md:text-base border-2 border-[#6A8C25]  bg-[#6A8C25] text-white hover:bg-transparent hover:text-[#6A8C25] dark:hover:text-white  dark:hover:bg-transparent  dark:hover:border-white"
                  >
                    LogOut
                  </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

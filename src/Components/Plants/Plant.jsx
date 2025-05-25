import React from "react";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiWateringCan } from "react-icons/gi";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Plant = ({ plant, setPlant, plants }) => {


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://planto-beta.vercel.app/plant/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
   
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your plat has been deleted.",
                icon: "success",
              });

                const remaining = plants.filter((p) => p._id !== id);
                setPlant(remaining);
            }
          });
      }
    });
  };





  return (
    <div className="bg-white dark:bg-[#6A8C25] shadow-lg rounded-lg overflow-hidden group">
      <div className="img-box w-full h-64 overflow-hidden">
        <img
          src={plant["plant-image"]}
          alt=""
          className="size-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
        />
      </div>
      <div className="content-box p-5">
        <h2 className="text-[#6A8C25] dark:text-white text-xl md:text-2xl font-semibold mb-2">
          {plant.name}
        </h2>
        <p className="text-gray-500 dark:text-gray-200 text-sm md:text-base mb-2">
          {plant.description.slice(0, 90)}
          {plant.description.length > 90 && "..."}
        </p>
        <div className="plant-meta flex justify-between items-center mt-8 mb-5">
          <p className="flex items-center gap-2">
            <span className="size-8 rounded-full bg-[#6A8C25] dark:bg-white flex items-center justify-center text-white dark:text-[#6A8C25]">
              <FaHandHoldingWater size={18} />
            </span>
            <span className="text-base md:text-lg text-gray-500 dark:text-gray-200 capitalize">
              {plant["care-level"]}
            </span>
          </p>

          <p className="flex items-center gap-2 mb-3">
            <span className="size-8 rounded-full bg-[#6A8C25] dark:bg-white flex items-center justify-center text-white dark:text-[#6A8C25]">
              <GiWateringCan size={22} />
            </span>

            <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">
              {plant["watering-frequency"]} days
            </span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
        <Link
        to={`/details/${plant._id}`}
        className="bg-[#6A8C25] text-white hover:bg-lime-700 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-center font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out">
        View
        </Link>
        <Link
        to={`/update-plant/${plant._id}`}
        className="bg-green-500 text-white hover:bg-green-600 text-center font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out">
        Update
        </Link>

        <button
        onClick={() => handleDelete(plant._id)}
        className=" bg-yellow-600 hover:bg-yellow-700 text-white text-center font-semibold py-3 px-4 rounded-md transition duration-300 ease-in-out">
            Delete
        </button>
        </div>
      </div>
    </div>
  );
};
export default Plant;

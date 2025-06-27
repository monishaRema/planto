import { Helmet } from "@dr.pogodin/react-helmet";
import React, {  useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Navigate, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { baseUrl } from "../config";

const UpdatePlant = () => {
  const plant = useLoaderData();
  const [healthStatus, setHealthStatus] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    setHealthStatus(plant["health-status"]);
  }, []);

  if(plant.length >= 0){
    return <Navigate to="/dashboard/my-plants"></Navigate>
  }

  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());

    fetch(`${baseUrl}/plant/${plant._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => {
      
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "Plant updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/my-plants");
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error updating plant",
          text: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <section className="bg-green-50 dark:bg-lime-950 py-24 bg-cover bg-center bg-no-repeat"
    
    style={{backgroundImage:'url(https://images.unsplash.com/photo-1714335363393-14589efd895b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}
    >
           <Helmet>
      <title>Planto | Update Plant
      </title>
    </Helmet>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-[#ffffff90] dark:bg-[#00000060] backdrop-blur-md rounded-lg shadow-lg overflow-hidden text-dark dark:text-gray-200">
          <div className="bg-[#6A8C25] dark:bg-[#204e36] py-4 sm:py-6 px-4 sm:px-8 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">Update Plant's Data</h1>
            <p className="mt-2 opacity-90">
              Update the details of your plant to keep track of its care and
              health.
            </p>
          </div>

          <form className="p-4 sm:p-8" onSubmit={handleUpdatePlant}>
          
            <div className="mb-4">
              <label
                className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-2"
                htmlFor="plant-name"
              >
                Plant Name *
              </label>
              <input
                className="border border-dashed border-green-800    dark:border-green-50 rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100 outline-none focus:border-solid"
                id="plant-name"
                name="name"
                type="text"
                defaultValue={plant.name}
                placeholder="e.g. Monstera Deliciosa"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="mb-6 sm:mb-8">
                <label
                  className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-3"
                  htmlFor="plant-image"
                >
                  Plant Image *
                </label>
                <input
                  type="text"
                  className="border border-dashed border-green-800    dark:border-green-50 rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100 outline-none focus:border-solid "
                  id="plant-name"
                  name="plant-image"
                  placeholder="Plant image url"
                  defaultValue={plant["plant-image"]}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category *
                </label>
                <div className="relative">
                  <select
                    className="block border border-dashed border-green-800 dark:border-green-50 rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 outline-none focus:border-solid dark:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700"
                    id="category"
                    name="category"
                    required
                    defaultValue={plant.category}
                  >
                    <option disabled>
                      Select a category
                    </option>
                    <option defaultValue="succulent">Succulent</option>
                    <option defaultValue="fern">Fern</option>
                    <option defaultValue="flowering">Flowering</option>
                    <option defaultValue="tropical">Tropical</option>
                    <option defaultValue="cacti">Cacti</option>
                    <option defaultValue="herb">Herb</option>
                    <option defaultValue="vine">Vine</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-900 dark:text-gray-100">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description *
              </label>
              <textarea
                className="border border-dashed border-green-800    dark:border-green-50 rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100 outline-none focus:border-solid"
                id="description"
                name="description"
                rows="4"
                defaultValue={plant.description}
                placeholder="Describe your plant, its origin, or any special notes..."
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="mb-4">
                <label
                  className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-2"
                  htmlFor="care-level"
                >
                  Care Level *
                </label>
                <div className="relative">
                  <select
                    className="block border border-dashed border-green-800 dark:border-green-50 rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 outline-none focus:border-solid dark:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700"
                    id="care-level"
                    name="care-level"
                    defaultValue={plant["care-level"]}
                    required
                  >
                    <option  disabled >
                      Select care level
                    </option>
                    <option defaultValue="easy">Easy - Low maintenance</option>
                    <option defaultValue="moderate">
                      Moderate - Regular attention needed
                    </option>
                    <option defaultValue="difficult">
                      Difficult - Requires specific care
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-900 dark:text-gray-100">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-2"
                  htmlFor="watering-frequency"
                >
                  Watering Frequency *
                </label>
                <input
                  className="border border-dashed border-green-800    dark:border-green-50 rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100 outline-none focus:border-solid"
                  id="watering-frequency"
                  name="watering-frequency"
                  type="number"
                  defaultValue={plant["watering-frequency"]}
                  placeholder="e.g. Every 3 days"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="mb-4">
                <label
                  className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-2"
                  htmlFor="last-watered"
                >
                  Last Watered Date *
                </label>
                <input
                  className="border border-dashed border-green-800    dark:border-green-50 rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100 outline-none focus:border-solid"
                  id="last-watered"
                  name="last-watered"
                  type="date"
                  defaultValue={plant["last-watered"]}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-2"
                  htmlFor="next-watering"
                >
                  Next Watering Date *
                </label>
                <input
                  className="border border-dashed border-green-800    dark:border-green-50 rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-900 dark:text-gray-100 outline-none focus:border-solid"
                  id="next-watering"
                  name="next-watering"
                  defaultValue={plant["next-watering"]}
                  type="date"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 dark:text-gray-100 text-sm font-bold mb-2">
                Health Status *
              </label>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-green-500"
                    name="health-status"
                    defaultValue="healthy"
                    checked={healthStatus === "healthy"}
                    onChange={(e) => setHealthStatus(e.target.value)}
                  />
                  <span className="ml-2 text-gray-900 dark:text-gray-100">Healthy</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-yellow-500"
                    name="health-status"
                    defaultValue="needs-attention"
                    checked={healthStatus === "needs-attention"}
                    onChange={(e) => setHealthStatus(e.target.value)}
                  />
                  <span className="ml-2 text-gray-900 dark:text-gray-100">Needs Attention</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-red-500"
                    name="health-status"
                    defaultValue="unhealthy"
                    checked={healthStatus === "unhealthy"}
                    onChange={(e) => setHealthStatus(e.target.value)}
                  />
                  <span className="ml-2 text-gray-900 dark:text-gray-100">Unhealthy</span>
                </label>
              </div>
            </div>

            <hr className="my-6 sm:my-8 border-gray-200" />

            <div className="">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#6A8C25] hover:bg-lime-700 text-white py-3 px-6 shadow-md rounded-md font-medium flex items-center justify-center gap-2"
              >
                <FaEdit></FaEdit> <span>Update Plant</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdatePlant;

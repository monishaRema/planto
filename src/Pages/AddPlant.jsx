import React, { use } from 'react';
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../Contex/AuthContex";
import Swal from 'sweetalert2';
import { Helmet } from '@dr.pogodin/react-helmet';
import {useNavigate } from 'react-router';
import { baseUrl } from '../config';
import axios from 'axios';

const AddPlant = () => {

    const {user} = use(AuthContext)
 const navigate = useNavigate();
    
    const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());

    plantData.userEmail = user?.email;
    plantData.userName = user?.displayName;
    plantData.createdAt = new Date();

      axios.post(`${baseUrl}/plant`,plantData)
      .then((res) => {

        if (res.data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Plant added successfully!',
            showConfirmButton: false,
            timer: 1500
          })

          form.reset();
          navigate('/all-plants')
        }
      })
      .catch((error) => {
       Swal.fire({
            icon: 'error',
            title: 'Error adding plant',
            text: error.message,
            showConfirmButton: false,
            timer: 1500
          })

      });
   
  };
    return (
       <>

  <section className="bg-gradient-to-b from-green-50 to-yellow-50 dark:to-[#6A8C25] dark:from-[#204e36] py-25 ">
    <Helmet>
      <title>Planto | Add Plant
      </title>
    </Helmet>
      <div className="container mx-auto px-4 ">
        <div className="max-w-4xl mx-auto  bg-[#ffffff50] dark:bg-[#00000050] backdrop-blur-lg rounded-lg shadow-lg overflow-hidden  dark:text-gray-200">
          <div className="bg-[#6A8C25] py-4 sm:py-6 px-4 sm:px-8 text-white">
            <h1 className="text-2xl sm:text-3xl font-bold">Add a New Plant</h1>
            <p className="mt-2 opacity-90">
              Track and manage your plant collection
            </p>
          </div>

          <form className="p-4 sm:p-8" onSubmit={handleAddPlant}>
            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="plant-name"
              >
                Plant Name *
              </label>
              <input
                className="border border-dashed border-[#6A8C25] rounded-md w-full py-2 sm:py-3 px-3 sm:px-4  outline-none focus:border-solid"
                id="plant-name"
                name="name"
                type="text"
                placeholder="e.g. Monstera Deliciosa"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="mb-6 sm:mb-8">
                <label
                  className="block  text-sm font-bold mb-3"
                  htmlFor="plant-image"
                >
                  Plant Image *
                </label>
                <input
                  type="text"
                  className="border border-dashed border-[#6A8C25] rounded-md w-full py-2 sm:py-3 px-3 sm:px-4  outline-none focus:border-solid "
                  id="plant-name"
                  name="plant-image"
                  placeholder="Plant image url"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category *
                </label>
                <div className="relative">
                  <select
                    className="block border border-dashed border-[#6A8C25] rounded-md w-full py-2 sm:py-3 px-3 sm:px-4 outline-none focus:border-solid dark:text-gray-400"
                    id="category"
                    name="category"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="succulent">Succulent</option>
                    <option value="fern">Fern</option>
                    <option value="flowering">Flowering</option>
                    <option value="tropical">Tropical</option>
                    <option value="cacti">Cacti</option>
                    <option value="herb">Herb</option>
                    <option value="vine">Vine</option>
                 
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description *
              </label>
              <textarea
                className="border border-dashed border-[#6A8C25] rounded-md w-full py-2 sm:py-3 px-3 sm:px-4  outline-none focus:border-solid "
                id="description"
                name="description"
                rows="4"
                placeholder="Describe your plant, its origin, or any special notes..."
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="care-level"
                >
                  Care Level *
                </label>
                <div className="relative">
                  <select
                    className="block border border-dashed border-[#6A8C25] rounded-md w-full py-2 sm:py-3 px-3 sm:px-4  outline-none focus:border-solid dark:text-gray-400"
                    id="care-level"
                    name="care-level"
                    required
                  >
                    <option value="" disabled selected>
                      Select care level
                    </option>
                    <option value="easy">Easy - Low maintenance</option>
                    <option value="moderate">
                      Moderate - Regular attention needed
                    </option>
                    <option value="difficult">
                      Difficult - Requires specific care
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                    <i className="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="watering-frequency"
                >
                  Watering Frequency *
                </label>
                <input
                  className="border border-dashed border-[#6A8C25] rounded-md w-full py-2 sm:py-3 px-3 sm:px-4  outline-none focus:border-solid"
                  id="watering-frequency"
                  name="watering-frequency"
                  type="number"
                  placeholder="e.g. Every 3 days"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="last-watered"
                >
                  Last Watered Date *
                </label>
                <input
                  className="border border-dashed border-[#6A8C25] rounded-md w-full py-2 sm:py-3 px-3 sm:px-4  outline-none focus:border-solid"
                  id="last-watered"
                  name="last-watered"
                  type="date"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block  text-sm font-bold mb-2"
                  htmlFor="next-watering"
                >
                  Next Watering Date *
                </label>
                <input
                  className="border border-dashed border-[#6A8C25] rounded-md w-full py-2 sm:py-3 px-3 sm:px-4  outline-none focus:border-solid"
                  id="next-watering"
                  name="next-watering"
                  type="date"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block  text-sm font-bold mb-2">
                Health Status *
              </label>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-green-500"
                    name="health-status"
                    defaultValue="healthy"
                    defaultChecked
                  />
                  <span className="ml-2 ">Healthy</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-yellow-500"
                    name="health-status"
                    defaultValue="needs-attention"
                  />
                  <span className="ml-2 ">Needs Attention</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-red-500"
                    name="health-status"
                    defaultValue="unhealthy"
                  />
                  <span className="ml-2 ">Unhealthy</span>
                </label>
              </div>
            </div>

            <hr className="my-6 sm:my-8 border-gray-200 dark:border-[#6A8C25]" />

            <div className="">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#6A8C25] hover:bg-lime-600 text-white py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center gap-1"
              >
                <FaPlus></FaPlus> <span>Add Plant</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
       </>
    );
};

export default AddPlant; 
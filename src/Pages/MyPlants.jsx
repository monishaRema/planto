import React, { Suspense, use, useEffect, useState } from "react";
import { AuthContext } from "../Contex/AuthContex";
import HasPlants from "../Components/Plants/HasPlants";
import NoPlant from "../Components/Plants/NoPlant";
import { Helmet } from "@dr.pogodin/react-helmet";
import { baseUrl } from "../config";

const MyPlants = () => {
  const [plants, setPlant] = useState([]);
  const { user } = use(AuthContext);
  const email = user?.email;

  useEffect(() => {
    fetch(`${baseUrl}/my-plants/${email}`)
      .then((res) => res.json())
      .then((data) => setPlant(data));
  }, []);

  return (
    <section className="bg-gradient-to-b from-green-50 to-yellow-50 dark:to-[#6A8C25] dark:from-[#204e36] py-25">
      <Helmet>
        <title>Planto | My Plants</title>
      </Helmet>
      <div className="container mx-auto px-5">
        {plants?.length >= 0 ? (
          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            <HasPlants plants={plants} setPlant={setPlant}></HasPlants>
          </Suspense>
        ) : (
          <NoPlant></NoPlant>
        )}
      </div>
    </section>
  );
};

export default MyPlants

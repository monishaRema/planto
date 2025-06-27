import React from 'react';
import Banner from '../Components/Header/Banner';
import { useLoaderData } from 'react-router';
import LatestPlats from '../Components/Home/LatestPlats';
import TrackPlant from '../Components/Home/TrackPlant';
import WhyTrack from '../Components/Home/WhyTrack';
import CTA from '../Components/Home/CTA';
import { Helmet } from '@dr.pogodin/react-helmet';

const Home = () => {
      const latestPlants = useLoaderData();
    return (
       <>   
            <Helmet>
      <title>Planto | Home
      </title>
    </Helmet>
       <Banner></Banner>
       <TrackPlant></TrackPlant>
       <LatestPlats latestPlants={latestPlants}></LatestPlats>
       <WhyTrack></WhyTrack>
      <CTA></CTA>
       </>
    );
};

export default Home;
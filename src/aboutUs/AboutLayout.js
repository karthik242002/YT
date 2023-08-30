import React from 'react';
import './CSS/AboutLayout.css'
import Navbar from '../home/Navbar'
import Welcome from './Welcome';
import Purpose from './Purpose';
import Commitment from './Commitment';
import MissionAndJourney from './MissionAndJourney';
import Empower from './Empower';
import Together from './Together';
import Team from './Team';
import SocialInitiatives from './SocialInitiatives';
import Corevalues from './Corevalues';
import CorevalueFooter from './CorevalueFooter';
import Footer from './Footer';


function AboutLayout() {
  return (
    <div>
      
      <Welcome></Welcome>
      <Purpose></Purpose>
      <Commitment></Commitment>
      <MissionAndJourney></MissionAndJourney>
      <Empower></Empower>
      <Together></Together>
      <Team></Team>
      <SocialInitiatives></SocialInitiatives>
      <Corevalues></Corevalues>
      <CorevalueFooter></CorevalueFooter>
      <Footer></Footer>
      
    </div>
  );
}

export default AboutLayout;

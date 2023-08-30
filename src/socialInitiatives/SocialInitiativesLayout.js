import React from 'react'
import HeaderSoIn from './HeaderSoIn'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import FooterSoIn from './FooterSoIn'
import '../App.css';

function SocialInitiativesLayout() {
  return (
    <div>
     
      <HeaderSoIn></HeaderSoIn>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
      <FooterSoIn></FooterSoIn>
    </div>
  );
}

export default SocialInitiativesLayout;

import React from 'react'
import '../App.css';
import Navbar from '../home/Navbar'
import HeaderBp from './HeaderBp'
import SpiritualityLayout from './spirituality/SpiritualityLayout'
import PersonalGrowthLayout from './personnalGrowth/PersonalGrowthLayout'
import FictionLayout from './fictionLiterature/FictionLayout'
import NonfictionLayout from './nonfiction/NonfictionLayout'
import AuthorSpot from './AuthorSpot'
import Recommendations from './recommendations/Recommendations';
import FooterBook from './FooterBook';

function BookPageLayout(){
  return (
    <div>
      
      <HeaderBp></HeaderBp>
      <SpiritualityLayout></SpiritualityLayout>
      <PersonalGrowthLayout></PersonalGrowthLayout>
      <FictionLayout></FictionLayout>
      <NonfictionLayout></NonfictionLayout>
      <AuthorSpot></AuthorSpot>
      <Recommendations></Recommendations>
      <FooterBook></FooterBook>
    </div>
  );
}

export default BookPageLayout;

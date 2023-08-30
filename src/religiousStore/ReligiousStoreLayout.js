import React from 'react'
import Navbar from '../home/Navbar'
import HeaderRs from './HeaderRs'
import HeaderEd from './EmbracingDiversity/HeaderEd'
import SliderEd from './EmbracingDiversity/SliderEd'
import HeaderIaf from './IdolAndFigurines/HeaderIaf'
import SliderIaf from './IdolAndFigurines/SliderIaf'
import HeaderPa from './PrayerAccessories/HeaderPa'
import SliderPa from './PrayerAccessories/SliderPa'
import HeaderRt from './ReligiousTexts/HeaderRt'
import SliderRt from './ReligiousTexts/SliderRt'
import HeaderRj from './ReligiousJewellery/HeaderRj'
import SliderRj from './ReligiousJewellery/SliderRj'
import HeaderSd from './SacredDecor/HeaderSd'
import SliderSd from './SacredDecor/SliderSd'
import FooterRs from './FooterRs'
import '../App.css';

function ReligiousStoreLayout(){
  return (
    <div>
      
      <HeaderRs></HeaderRs>
      <HeaderEd></HeaderEd>
      <SliderEd></SliderEd>
      <HeaderIaf></HeaderIaf>
      <SliderIaf></SliderIaf>
      <HeaderPa></HeaderPa>
      <SliderPa></SliderPa>
      <HeaderRt></HeaderRt>
      <SliderRt></SliderRt>
      <HeaderRj></HeaderRj>
      <SliderRj></SliderRj>
      <HeaderSd></HeaderSd>
      <SliderSd></SliderSd>
      <FooterRs></FooterRs>
    </div>
  );
}

export default ReligiousStoreLayout;

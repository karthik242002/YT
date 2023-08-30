import React from 'react';
import Navbar from '../home/Navbar'
import HeaderFood from './HeaderFood';
import Products from '../foodProducts/Products/Products';
import Slideshow from '../foodProducts/Products/Slideshow';
import HeaderFp from '../foodProducts/freshproduce/HeaderFp';
import SliderFp from './freshproduce/SliderFp';
import HeaderPe from './pantryEssentials/HeaderPe';
import SliderPe from './pantryEssentials/SliderPe';
import HeaderGd from './GourmentsDelight/HeaderGd';
import SliderGd from './GourmentsDelight/SliderGd';
import HeaderSat from './SnacksAndTreats/HeaderSat';
import SliderSat from './SnacksAndTreats/SliderSat';
import HeaderBv from './Beverages/HeaderBv';
import SliderBv from './Beverages/SliderBv';
import Sustainable from './Sustainable';
import FooterNLES from './FooterNLES';
import '../App.css'

function FoodLayout(){
  return (
    <div>
      
       <HeaderFood></HeaderFood>
      <Products></Products>
     <Slideshow></Slideshow>
     <HeaderFp></HeaderFp>
     <SliderFp></SliderFp>
     <HeaderPe></HeaderPe>
     <SliderPe></SliderPe>
      <HeaderGd></HeaderGd>
     <SliderGd></SliderGd>
     <HeaderSat></HeaderSat>
     <SliderSat></SliderSat>
     <HeaderBv></HeaderBv>
     <SliderBv></SliderBv>
     <Sustainable></Sustainable>
     <FooterNLES></FooterNLES>
    </div>
  );
}

export default FoodLayout;

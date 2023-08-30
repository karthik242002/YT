import React from 'react'
import '../App.css';
import HeaderSf from './HeaderSf';
import SocialMissionSf from './SocialMissionSf';
import EligibilityCriteria from './EligibilityCriteria';
import AffordableMeals from '../socialInitiatives/AffordableMeals';

function SubsidisedLayout(){
  return (
    <div>
      <HeaderSf></HeaderSf>
      <SocialMissionSf></SocialMissionSf>
      <EligibilityCriteria></EligibilityCriteria>
      <AffordableMeals></AffordableMeals>
    </div>
  );
}

export default SubsidisedLayout;
